import { Component } from '@angular/core';

@Component({
  template: ''
})
export class ValidatorRulesComponent {

  SSN_REGEXP: RegExp = /^(\d{3}-?\d{2}-?\d{4})$/;

  getSSNPattern(): RegExp {
    return this.SSN_REGEXP;
  }

}
