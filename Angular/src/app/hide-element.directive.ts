import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
    @Input() set appHideElement(condition: boolean) { //*hideElement = true or false will be used in HTML
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef); //false, then display element
        } else {
            this.viewContainer.clear(); //clear element from DOM
        }
    }

}