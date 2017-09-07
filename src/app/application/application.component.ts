import { Component, OnInit, DoCheck } from '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationRules } from '../validator/validator-rules.component';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { CurrentApplicationService } from './service/current-application.service';
import * as _ from 'lodash'

@Component({
  selector: 'application',
  templateUrl: './templates/application.component.html',
  styleUrls: ['./templates/application.component.css']
})
export class ApplicationComponent {

  taxForm: FormGroup;
  client: Client;
  year: number;
  estimate: number;
  currentAgi: number;

  constructor(
    private _uiRouter: UIRouter,
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService
   ) {
     this.taxForm = formBuilder.group({
       'firstName' : [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
       'middleName' : '',
       'lastName': [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
       'suffixName': '',
       'returnYear': '2017',
       'ssnItin' : [null, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
       'generateItin' : false
     });
  }

  ngOnInit(): void {
    if (!this.currentApplicationService.getApplication()) {
      this._uiRouter.stateService.go('menu.landingPage');
    }else{
      this.client = this.currentApplicationService.getClient();
      this.year = this.currentApplicationService.getApplication().year;
      this.estimate = this.currentApplicationService.getApplication().estimate;
      this.currentAgi = this.currentApplicationService.getApplication().currentAgi;
      if (_.isEmpty(this.currentAgi)) this.currentAgi = 0;
    }
  }

  ngDoCheck(): void {
    if (this.currentApplicationService.getApplication()) {
      this.currentApplicationService.calculate();
      this.estimate = this.currentApplicationService.getEstimate();
      this.currentAgi = this.currentApplicationService.getCurrentAGI();
    } else {
      this.estimate = 0;
      this.currentAgi = 0;
    }
  }

  submitForm(fields: any):void {
    //Save intfo here
  }


  private _opened: boolean = true;
  private _modeNum: number = 1;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = false;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  private _onOpened(): void {
    console.info('Sidebar opened');
  }

  private _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  private _onClosed(): void {
    console.info('Sidebar closed');
  }
}
