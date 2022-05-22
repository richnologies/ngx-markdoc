import { Component, ElementRef, Input, OnChanges, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { NgxMarkdocService } from './markdoc.service';

@Component({
  selector: 'ngx-markdoc',
  template: `
    <ng-container #vcf></ng-container>
    <ng-template #text let-content>{{ content }}</ng-template>
  `
})
export class NgxMarkdocComponent implements OnChanges {
  @Input() data: string | undefined;
  @Input() renderer: 'html' | 'angular' = 'html';

  @ViewChild('vcf', { read: ViewContainerRef, static: true }) vcf!: ViewContainerRef;
  @ViewChild('text', { read: TemplateRef, static: true }) text!: TemplateRef<unknown>;

  constructor(
    private el: ElementRef,
    private ngRenderer: Renderer2,
    private markdoc: NgxMarkdocService
  ) {}

  ngOnChanges(): void {
    if (this.data) {
      this.render(this.data)
    }
  }

  private render(content: string): void {
    const compiled = this.markdoc.compile(content);

    if (this.renderer === 'html' && this.el.nativeElement) {
      const html = this.markdoc.renderHTML(compiled);
      this.el.nativeElement.innerHTML = html ?? '';
    }

    if (this.renderer === 'angular') {
      console.log(compiled);
      this.markdoc.renderAngular(compiled, this.vcf, this.ngRenderer, this.text);
    }
  }
}
