import { Component, OnInit, Input, ViewChild, DoCheck, OnDestroy, ViewContainerRef } from  '@angular/core';
import { Transition } from '@uirouter/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { DatePickerUtils } from './utils/date-picker-utils';
import { MaskUtils } from './utils/masks-utils';
import { ZipCodeApiService } from '../common/api/zip-code-api.service';
import { ZipCodeUtils } from './utils/zip-code-utils';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Dependent, BasicInformation, TaxCreditEIC, SpecialCondition } from '../common/';
import { NInputComponent, NTextareaComponent, NCheckboxComponent } from '../common/n-components/';
import { MyDatePickerModule, IMyDefaultMonth, IMyDpOptions, IMyDateModel } from 'mydatepicker';
import * as _ from 'lodash';

@Component({
  selector:'dependent',
  templateUrl: './templates/dependent.component.html'
})
export class DependentComponent implements OnInit, OnDestroy {
  maskUtils: MaskUtils = new MaskUtils();
  datePickerUtils: DatePickerUtils = new DatePickerUtils();
  ssnMask: Array<string | RegExp> = this.maskUtils.MASKS.SSN;
  dateMask: Array<string | RegExp> = this.maskUtils.MASKS.DATE;
  initialMask: Array<string | RegExp> = this.maskUtils.MASKS.INITIAL;
  suffixMask: Array<string | RegExp> = this.maskUtils.MASKS.NAME_SUFFIX;
  ipinMask: Array<string | RegExp> = this.maskUtils.MASKS.IPIN;
  year: number;
  taxForm: FormGroup;
  basicInfoGroup: FormGroup;
  taxCreditEICGroup: FormGroup;
  specialConditionGroup: FormGroup;
  dependent: Dependent;
  dependentId: string;
  relationshipList: any;
  monthsInHomeList: any;
  codeList: any;
  eicCodeList: any;
  hasRelationshipOtherPerson: boolean = false;
  hasDeathDate: boolean = false;
  displaySpecialCondition: boolean = false;
  myDatePickerOptions: IMyDpOptions = this.datePickerUtils.myDatePickerOptions;
  defaultMonth: IMyDefaultMonth = this.datePickerUtils.defaultMonth;
  deathDateOptions: IMyDpOptions;
  deathDefault:IMyDefaultMonth;

  constructor(
    private formBuilder: FormBuilder,
    private trans: Transition,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private currentApplicationService: CurrentApplicationService ){
      this.toastr.setRootViewContainerRef(vcr);
      this.year = this.currentApplicationService.getApplication().year;
      this.dependent = this.getDependent(trans.params().id);

      this.basicInfoGroup = this.createBasicInfoGroup(this.dependent.basicInfo);
      this.taxCreditEICGroup = this.createTaxCreditEICGroup(this.dependent.taxCreditEIC);
      this.specialConditionGroup = this.createSpecialConditionGroup(this.dependent.specialCondition);

      this.taxForm = formBuilder.group({
        'basicInfo': this.basicInfoGroup,
        'relationship': [this.dependent.relationship, Validators.compose([Validators.required, Validators.minLength(1)])],
        'monthsInHome': this.dependent.monthsInHome,
        'identityProtectionPin' : [this.dependent.identityProtectionPin, Validators.compose([Validators.pattern(validationRules.IPIN)])],
        'ctc': this.dependent.ctc,
        'code': this.dependent.code,
        'eicCode': [{value: this.dependent.eicCode, disabled: true}, Validators.compose([Validators.required, Validators.minLength(1)])],
        'taxCreditEIC': this.taxCreditEICGroup,
        'relationshipOtherPerson': this.dependent.relationshipOtherPerson,
        'specialCondition': this.specialConditionGroup,
        'dateOfDeath': this.dependent.dateOfDeath,
        'claimDependentYes': this.dependent.claimDependentYes,
        'claimDependentNo': this.dependent.claimDependentNo,
        'claimEducationYes': this.dependent.claimEducationYes,
        'claimEducationNo': this.dependent.claimEducationNo
      });

      this.taxForm.get('relationship').valueChanges.subscribe((relationship: string) => {
        // console.log("relationship: " + relationship);
        if (relationship === '') {
            this.taxForm.get('relationship').setValidators([Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]);
            this.taxForm.get('relationship').setValue(null);
        }

        this.taxForm.get('relationship').updateValueAndValidity();
      });
    }

    ngOnInit():void {
      this.setDateFromField(
        this.taxForm.get('basicInfo').get('dateOfBirth'),
        this.taxForm.get('basicInfo').get('age')
      );
      this.initializeDropDownOptions();
      this.showRelationshipOtherPerson(undefined);
      this.enableSpecialCondition(this.taxForm.get('basicInfo').get('age').value);
      this.enableEicCode(this.taxForm.get('basicInfo').get('age').value);

      this.deathDateOptions = {
          showTodayBtn: true,
          dateFormat: 'mm/dd/yyyy',
          disableSince: {year: (this.year+1), month: 1, day: 1}
      };

      this.deathDefault = {defMonth: '01/'+ this.year};
    }

    ngOnDestroy() : void {
      // save inpout data
      this.submitForm('');
    }

    initializeDropDownOptions() {
      this.monthsInHomeList = this.getMonthsInHomeList();

      this.relationshipList = [
        {'name':'Son', 'value':'son'},
        {'name':'Daughter', 'value':'daughter'},
        {'name':'Stepchild', 'value':'stepchild'},
        {'name':'Parent', 'value':'parent'},
        {'name':'Foster Child', 'value':'foster_child'},
        {'name':'Grandchild', 'value':'grandchild'},
        {'name':'Grandparent', 'value':'grandparent'},
        {'name':'Brother', 'value':'brother'},
        {'name':'Sister', 'value':'sister'},
        {'name':'Stepbrother', 'value':'stepbrother'},
        {'name':'Stepsister', 'value':'stepsister'},
        {'name':'Half brother', 'value':'half brother'},
        {'name':'Half sister', 'value':'half sister'},
        {'name':'Aunt', 'value':'aunt'},
        {'name':'Uncle', 'value':'uncle'},
        {'name':'Nephew', 'value':'nephew'},
        {'name':'Niece', 'value':'niece'},
        {'name':'Other', 'value':'other'}
      ];

      this.codeList = [
        {'name':'1 - Dependent child who lived with client', 'value':'1'},
        {'name':'2 - Dependent child who did not live with client due to divorce or separation', 'value':'2'},
        {'name':'3 - Other dependent', 'value':'3'},
        {'name':'0 - Not a dependent (but is a qualifying person for the earned income credit and/or the child tax)', 'value':'0'}
      ];

      this.eicCodeList = [
        {'name':'Disabled', 'value':'disabled'},
        {'name':'Kidnapped', 'value':'kidnapped'},
        {'name':'Student', 'value':'student'},
        {'name':'Does not qualify for EIC', 'value':'not_qualified'},
      ];
    }

    getMonthsInHomeList(): any {
      let monthsInHomeList = [];
      for (let i=0; i<=12; i++) {
        monthsInHomeList.push({'name':i, 'value':i});
      }
      monthsInHomeList.push({'name':'Mexico', 'value':'mexico'});
      monthsInHomeList.push({'name':'Canada', 'value':'canada'});
      return monthsInHomeList;
    }

    showRelationshipOtherPerson($event): void {
      this.hasRelationshipOtherPerson = (this.taxForm.get('taxCreditEIC').get('question4Yes').value === true);
      if (this.hasRelationshipOtherPerson) {
        this.taxForm.get('relationshipOtherPerson').reset();
      }
    }

    createBasicInfoGroup(basicInfo: BasicInformation): FormGroup {
      if (!basicInfo) basicInfo = new BasicInformation();
      return new FormGroup({
        'firstName': new FormControl(basicInfo.firstName, Validators.compose([Validators.required, Validators.maxLength(45), Validators.pattern(validationRules.STRING)])),
        'initial': new FormControl(basicInfo.initial, Validators.compose([Validators.maxLength(1), Validators.pattern(validationRules.STRING)])),
        'lastName': new FormControl(basicInfo.lastName, Validators.compose([Validators.required, Validators.maxLength(45), Validators.pattern(validationRules.STRING)])),
        'suffix': new FormControl(basicInfo.suffix),
        'ssn': new FormControl({value: basicInfo.ssn, disabled: false }, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])),
        'dateOfBirth': new FormControl(basicInfo.dateOfBirth, Validators.required),
        'age': new FormControl({value: '0', disabled: true })
      });
    }

    createTaxCreditEICGroup(taxCreditEIC: TaxCreditEIC): FormGroup {
      if (!taxCreditEIC) taxCreditEIC = new TaxCreditEIC();
      return new FormGroup({
        'question1Yes': new FormControl(taxCreditEIC.question1Yes),
        'question1No': new FormControl(taxCreditEIC.question1No),
        'question2Yes': new FormControl(taxCreditEIC.question2Yes),
        'question2No': new FormControl(taxCreditEIC.question2No),
        'question3Yes': new FormControl(taxCreditEIC.question3Yes),
        'question3No': new FormControl(taxCreditEIC.question3No),
        'question4Yes': new FormControl(taxCreditEIC.question4Yes),
        'question4No': new FormControl(taxCreditEIC.question4No),
        'question5Yes': new FormControl(taxCreditEIC.question5Yes),
        'question5No': new FormControl(taxCreditEIC.question5No),
        'question6Yes': new FormControl(taxCreditEIC.question6Yes),
        'question6No': new FormControl(taxCreditEIC.question6No),
        'question7Yes': new FormControl(taxCreditEIC.question7Yes),
        'question7No': new FormControl(taxCreditEIC.question7No),
        'question8Yes': new FormControl(taxCreditEIC.question8Yes),
        'question8No': new FormControl(taxCreditEIC.question8No),
      });
    }

    createSpecialConditionGroup(specialCondition: SpecialCondition): FormGroup {
      if (!specialCondition) specialCondition = new SpecialCondition();
      return new FormGroup({
        'under24Yes': new FormControl(specialCondition.under24Yes),
        'under24No': new FormControl(specialCondition.under24No),
        'disabledYes': new FormControl(specialCondition.disabledYes),
        'disabledNo': new FormControl(specialCondition.disabledNo),
        'kidnappedYes': new FormControl(specialCondition.kidnappedYes),
        'kidnappedNo': new FormControl(specialCondition.kidnappedNo),
        'didntLiveYes': new FormControl(specialCondition.didntLiveYes),
        'didntLiveNo': new FormControl(specialCondition.didntLiveNo)
      });
    }

    onDateChanged(event: IMyDateModel, type: string) {
      if (!event.jsdate) return;
      this.taxForm.get(type).patchValue({'age': this.calculateAge(event.jsdate)});
    }

    calculateAge(birthday:Date) {
       let ageDifMs = Date.now() - birthday.getTime();
       let ageDate = new Date(ageDifMs);
       let age = Math.abs(ageDate.getUTCFullYear() - 1970);
       if (age >= 19) {
         this.taxForm.get('eicCode').enable();
       } else {
         this.taxForm.get('eicCode').disable();
       }
       return age
    }

    setDateFromField(dateField: any, ageField: any) {
      if (dateField.value && dateField.value.date) {
        let date = new Date(
          dateField.value.date.year,
          dateField.value.date.month,
          dateField.value.date.day
        );
        this.datePickerUtils.setDate(date, dateField);
        ageField.setValue(this.calculateAge(date));
      } else if (dateField.value) {
        let date = new Date(dateField.value);
        this.datePickerUtils.setDate(date, dateField);
        ageField.setValue(this.calculateAge(date));
      }
    }

    enableEicCode(age: number): void {
      if (age >= 19) {
        this.taxForm.get('eicCode').enable();
      } else {
        this.taxForm.get('eicCode').disable();
      }
    }

    enableSpecialCondition(age: number): void {
      this.displaySpecialCondition = (age >= 19);
    }

    boxChecked($event) {
      this.switchYesNo(this.taxForm, $event.target.id);
    }

    boxCheckedEIC($event) {
      this.switchYesNo(this.taxForm.get('taxCreditEIC'), $event.target.id);
    }

    boxCheckedSpecial($event) {
      this.switchYesNo(this.taxForm.get('specialCondition'), $event.target.id);
    }

    switchYesNo(field: AbstractControl, fieldName: string) {
      if (_.endsWith(fieldName, 'Yes') && field.get(fieldName).value === true) {
        field.get(fieldName.replace('Yes','No')).setValue(null);
      } else {
        field.get(fieldName.replace('No','Yes')).setValue(null);
      }
    }

    monthsInHomeSelection($event) {
      let monthsInHome = this.taxForm.get('monthsInHome').value;
      if (monthsInHome >= 7 && monthsInHome <= 12) {
        this.taxForm.get('taxCreditEIC').get('question3Yes').setValue(true);
        this.switchYesNo(this.taxForm.get('taxCreditEIC'), 'question3Yes');
      } else {
        this.taxForm.get('taxCreditEIC').get('question3No').setValue(true);
        this.switchYesNo(this.taxForm.get('taxCreditEIC'), 'question3No');
      }
    }

    setAllEicToNo() {
      this.taxForm.get('specialCondition').get("disabledNo").setValue(true);
      this.taxForm.get('specialCondition').get("kidnappedNo").setValue(true);
      this.taxForm.get('specialCondition').get("under24No").setValue(true);
      this.switchYesNo(this.taxForm.get('specialCondition'), "disabledNo");
      this.switchYesNo(this.taxForm.get('specialCondition'), "kidnappedNo");
      this.switchYesNo(this.taxForm.get('specialCondition'), "under24No");
    }

    selectEIC($event) {
      let eicCode = this.taxForm.get("eicCode").value;
      if (!eicCode || eicCode === '' ) return;
      this.setAllEicToNo();
      if (eicCode === 'disabled') {
        this.taxForm.get('specialCondition').get("disabledYes").setValue(true);
        this.switchYesNo(this.taxForm.get('specialCondition'), "disabledYes");
      } else if (eicCode === 'kidnapped') {
        this.taxForm.get('specialCondition').get("kidnappedYes").setValue(true);
        this.switchYesNo(this.taxForm.get('specialCondition'), "kidnappedYes");
      } else if (eicCode === 'student') {
        this.taxForm.get('specialCondition').get("under24Yes").setValue(true);
        this.switchYesNo(this.taxForm.get('specialCondition'), "under24Yes");
      } else if (eicCode === 'not_qualified') {
        // all set to no already
      }
    }

    selectDependentCode($event): void {
      this.taxForm.get('specialCondition').get("didntLiveNo").setValue(true);
      this.switchYesNo(this.taxForm.get('specialCondition'), "didntLiveNo");
      if (this.taxForm.get("code").value === '2') {
        this.taxForm.get('specialCondition').get("didntLiveYes").setValue(true);
        this.switchYesNo(this.taxForm.get('specialCondition'), "didntLiveYes");
      }
    }

    selectDeathDate($event): void {
      this.hasDeathDate = ($event.epoc > 0);
    }

    getDependent(id: string): Dependent {
      let dependent: Dependent = this.currentApplicationService.getDependentFromList(id);
      if (!dependent) dependent = new Dependent();
      this.dependentId = dependent._id;
      return dependent;
    }

    removeMask(dp: Dependent): Dependent {
      dp.basicInfo.dateOfBirth = this.maskUtils.retrieveDate(dp.basicInfo.dateOfBirth);
      return dp;
    }

    submitForm(fields: any):void {
      if (!this.taxForm.touched) return;

      let self = this;
      let dependent = this.taxForm.value;
      dependent._id = this.dependentId;
      dependent = this.removeMask(dependent);

      this.currentApplicationService.saveDependent(dependent);
      let name = (this.taxForm.get('basicInfo').get('firstName').value)? "(" + this.taxForm.get('basicInfo').get('firstName').value + ")": "";
      this.currentApplicationService.updateApplication().subscribe(
        data => {
          self.currentApplicationService.retrieveApplication(this.currentApplicationService.getApplication()._id).subscribe(
            data => {
              self.currentApplicationService.setDependents(data.dependents);
              self.toastr.success('Dependent ' + name + ' saved sucessfully', 'Success!');
            }
          );
        },err => {
          self.toastr.error('Please go back to Dependent ' + name + ' and try again.', 'Error saving Dependent ' + name + '!');
        }
      );
    }

}
