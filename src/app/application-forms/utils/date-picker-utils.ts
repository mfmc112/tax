import { AbstractControl } from '@angular/forms';
import { IMyDefaultMonth, IMyDpOptions } from 'mydatepicker';

export class DatePickerUtils {

  currentYear = new Date().getFullYear();

  myDatePickerOptions: IMyDpOptions = {
      // maxYear: 2015,
      showTodayBtn: false,
      dateFormat: 'mm/dd/yyyy'
      // disableSince: {year: 2016, month: 1, day: 1}
  };

  defaultMonth: IMyDefaultMonth = {
      defMonth: '01/'+ (this.currentYear-15)
  }

  setDate(date: Date, formField: AbstractControl): void {
    formField.setValue({
      date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()}
    });
  }

  setDateFromField(formField: any, triggerField: AbstractControl, triggerCallback: any) {
    if (formField.value && formField.value.date) {
      let date = new Date(
        formField.value.date.year,
        formField.value.date.month,
        formField.value.date.day
      );
      this.setDate(date, formField);
      if (triggerField && triggerCallback) triggerField.setValue(triggerCallback(date));
    } else if (formField.value) {
      let date = new Date(formField.value);
      this.setDate(date, formField);
      if (triggerField && triggerCallback) triggerField.setValue(triggerCallback(date));
    }
  }
}
