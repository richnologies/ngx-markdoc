import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Config } from '@markdoc/markdoc';

import { NgxMarkdocComponent } from './markdoc.component';
import { NgxMarkdocService } from './markdoc.service';
import { MARKDOC_GLOBAL_CONFIG, GLOBAL_RENDERER_CONFIG } from './models';

const components = [NgxMarkdocComponent];
const services = [NgxMarkdocService];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class NgxMarkdocModule {
  static forRoot(options: { config?: Config; rendererOptions?: { [component: string]: Type<unknown> } } = {}): ModuleWithProviders<NgxMarkdocModule> {
    return {
      ngModule: NgxMarkdocModule,
      providers: [
        ...services,
        {
          provide: MARKDOC_GLOBAL_CONFIG,
          useValue: options.config
        },
        {
          provide: GLOBAL_RENDERER_CONFIG,
          useValue: options.rendererOptions
        }
      ]
    };
  }
}
