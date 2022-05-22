/* eslint-disable @angular-eslint/component-selector */
import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'article[ngx-markdoc=article]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocArticleComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'h1[ngx-markdoc=h1]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocH1Component {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'h2[ngx-markdoc=h2]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocH2Component {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'h3[ngx-markdoc=h3]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocH3Component {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'h4[ngx-markdoc=h4]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocH4Component {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'h5[ngx-markdoc=h5]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocH5Component {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'h6[ngx-markdoc=h6]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocH6Component {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'pre[ngx-markdoc=pre]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocPreComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'code[ngx-markdoc=code]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocCodeComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'ol[ngx-markdoc=ol]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocOlComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'ul[ngx-markdoc=ul]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocUlComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'li[ngx-markdoc=li]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocLiComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'blockquote[ngx-markdoc=blockquote]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocBlockquoteComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'a[ngx-markdoc=a]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocAComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'p[ngx-markdoc=p]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocPComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'img[ngx-markdoc=img]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocImgComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'strong[ngx-markdoc=strong]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocStrongComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'em[ngx-markdoc=em]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocEmComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'table[ngx-markdoc=table]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocTableComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'thead[ngx-markdoc=thead]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocTHeadComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'tr[ngx-markdoc=tr]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocTRComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'th[ngx-markdoc=th]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocTHComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'tbody[ngx-markdoc=tbody]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocTBodyComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'td[ngx-markdoc=td]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocTDComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

@Component({
  selector: 'hr[ngx-markdoc=hr]',
  template: `<ng-container #vcr><ng-content></ng-content></ng-container>`
})
export class NgxMarkdocHrComponent {
  @ViewChild('vcr', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef;
}

export type NgxMarkdocHTMLWrapper =
  | NgxMarkdocArticleComponent
  | NgxMarkdocH2Component
  | NgxMarkdocH3Component
  | NgxMarkdocPreComponent
  | NgxMarkdocCodeComponent
  | NgxMarkdocOlComponent
  | NgxMarkdocUlComponent
  | NgxMarkdocLiComponent
  | NgxMarkdocBlockquoteComponent
  | NgxMarkdocAComponent
  | NgxMarkdocPComponent
  | NgxMarkdocImgComponent
  | NgxMarkdocTableComponent
  | NgxMarkdocTRComponent
  | NgxMarkdocTHeadComponent
  | NgxMarkdocTHComponent
  | NgxMarkdocTBodyComponent
  | NgxMarkdocTDComponent
  | NgxMarkdocHrComponent;

export const AuxiliaryTypesMap: { [type: string]: Type<NgxMarkdocHTMLWrapper> } = {
  'article': NgxMarkdocArticleComponent,
  'h1': NgxMarkdocH1Component,
  'h2': NgxMarkdocH2Component,
  'h3': NgxMarkdocH3Component,
  'h4': NgxMarkdocH4Component,
  'h5': NgxMarkdocH5Component,
  'h6': NgxMarkdocH6Component,
  'pre': NgxMarkdocPreComponent,
  'code': NgxMarkdocCodeComponent,
  'ol': NgxMarkdocOlComponent,
  'ul': NgxMarkdocUlComponent,
  'li': NgxMarkdocLiComponent,
  'blockquote': NgxMarkdocBlockquoteComponent,
  'a': NgxMarkdocAComponent,
  'p': NgxMarkdocPComponent,
  'img': NgxMarkdocImgComponent,
  'strong': NgxMarkdocStrongComponent,
  'em': NgxMarkdocEmComponent,
  'table': NgxMarkdocTableComponent,
  'thead': NgxMarkdocTHeadComponent,
  'tr': NgxMarkdocTRComponent,
  'th': NgxMarkdocTHComponent,
  'tbody': NgxMarkdocTBodyComponent,
  'td': NgxMarkdocTHComponent,
  // VOID ELEMENTS. We need a better way to render this kind of elements
  'hr': NgxMarkdocHrComponent
};
