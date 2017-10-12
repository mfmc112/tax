import { Component, OnInit, Input, ViewChild, DoCheck, OnDestroy, ViewContainerRef } from  '@angular/core';
import { Transition } from '@uirouter/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { DatePickerUtils } from './utils/date-picker-utils';
import { MaskUtils } from './utils/masks-utils';
import { ZipCodeApiService } from '../common/api/zip-code-api.service';
import { ZipCodeUtils } from './utils/zip-code-utils';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Dependent, BasicInformation } from '../common/';
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
  taxForm: FormGroup;
  basicInfoGroup: FormGroup;
  dependent:Dependent;
  dependentId: string;
  relationshipList: any;
  monthsInHomeList: any;
  myDatePickerOptions: IMyDpOptions = this.datePickerUtils.myDatePickerOptions;
  defaultMonth: IMyDefaultMonth = this.datePickerUtils.defaultMonth;

  constructor(
    private formBuilder: FormBuilder,
    private trans: Transition,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private currentApplicationService: CurrentApplicationService ){
      this.toastr.setRootViewContainerRef(vcr);
      this.dependent = this.getDependent(trans.params().id);

      this.basicInfoGroup = this.createBasicInfoGroup(this.dependent.basicInfo);
      this.taxForm = formBuilder.group({
        'basicInfo': this.basicInfoGroup,
        'relationship': this.dependent.relationship,
        'monthsInHome': this.dependent.monthsInHome,
        'identityProtectionPin' : [this.dependent.identityProtectionPin, Validators.compose([Validators.pattern(validationRules.IPIN)])],
        'ctc': this.dependent.ctc,
        'code': this.dependent.code,
        'eicCode': this.dependent.eicCode
      });
    }

    ngOnInit():void {
      this.datePickerUtils.setDateFromField(
        this.taxForm.get('basicInfo').get('dateOfBirth'),
        this.taxForm.get('basicInfo').get('age'),
        this.calculateAge
      );
      this.initializeDropDownOptions();
    }

    ngOnDestroy() : void {
      // save inpout data
      this.submitForm('');
    }

    initializeDropDownOptions() {
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

      this.monthsInHomeList = this.getMonthsInHomeList();
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

    onDateChanged(event: IMyDateModel, type: string) {
      if (!event.jsdate) return;
      this.taxForm.get(type).patchValue({'age': this.calculateAge(event.jsdate)});
    }

    calculateAge(birthday:Date) {
       var ageDifMs = Date.now() - birthday.getTime();
       var ageDate = new Date(ageDifMs);
       return Math.abs(ageDate.getUTCFullYear() - 1970);
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
