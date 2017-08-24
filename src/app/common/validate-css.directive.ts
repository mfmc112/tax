import { Directive, ElementRef, Renderer } from '@angular/core';

// Directive decorator
@Directive({ selector: '[validateCss]' })
// Directive class
export class ValidateCssDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementAttribute(el.nativeElement, '[class.ng-invalid]', 'taxForm.controls[' + el.nativeElement.id + '].invalid');
    }
}
