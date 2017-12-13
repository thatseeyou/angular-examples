import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { DisplayComponent } from './display.component'

/**
 * @ViewChild is able to reference DOM through template reference variable(ex. #hostName).
 * Supported types are ElementRef, TemplateRef, ViewContainerRef. 
 * ElementRef and TemplateRef can be inferred implicitly.
 * 
 * Host element can be referenced by DI of ElementRef.
 * 
 * View can be inserted into view container dynamically.
 * View(ViewRef) is one of two types.
 * - Embedded view linked to Template
 * - Host View linked to Component
 * 
 * Dynamically inserted component must be listed in entryComponents at host component or module metadata.
 * It is related to the tree shaking.
 */
@Component({
  selector: 'app-root',
  template: `
  <p #hostName></p>
  <ng-container #viewContainer></ng-container>
  <div #viewContainer2></div>
  <ng-container #viewContainer3></ng-container>

  <ng-template #tpl>
    <span>I am span in template</span>
  </ng-template>
  <ng-template #tpl2>
    <span>I am span in template2</span>
  </ng-template>
  `,
  entryComponents: [DisplayComponent] // dynamically inserted component
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('hostName', { read: ElementRef }) hostName: ElementRef;
  @ViewChild('tpl', { read: TemplateRef }) tpl: TemplateRef<any>;
  @ViewChild('tpl2', { read: TemplateRef }) tpl2: TemplateRef<any>;
  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
  @ViewChild('viewContainer2', { read: ViewContainerRef }) viewContainer2: ViewContainerRef;
  @ViewChild('viewContainer3', { read: ViewContainerRef }) viewContainer3: ViewContainerRef;

  constructor(
    private hostElement:ElementRef,
    private injector: Injector,
    private r: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    (this.hostName.nativeElement as HTMLParagraphElement).textContent = `nodeName of host = ${this.hostElement.nativeElement.nodeName}`;

    this.insertEmbeddedView();
    this.insertHostView();
  }

  ngAfterViewInit() {
  }

  private insertEmbeddedView() {
    // template => view container
    let view:EmbeddedViewRef<any> = this.tpl.createEmbeddedView(null);
    this.viewContainer.insert(view);

    // convenient method doing the same action as above
    // NOTICE: index option does not working as expected ???
    this.viewContainer.createEmbeddedView(this.tpl2, 0);

    // ordinary DOM can be used as view container
    let view2 = this.tpl.createEmbeddedView(null);
    this.viewContainer2.insert(view2);
  }

  private insertHostView() {
    let factory = this.r.resolveComponentFactory(DisplayComponent);
    let componentRef = factory.create(this.injector);
    let view:ViewRef = componentRef.hostView;

    this.viewContainer3.insert(view);

    console.dir(componentRef);
  }
}
