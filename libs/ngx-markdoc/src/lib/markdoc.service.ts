import { Injectable, Renderer2, ViewContainerRef, TemplateRef, Inject } from '@angular/core';

import Markdoc, { Config, RenderableTreeNode, Tag } from '@markdoc/markdoc';

import { AuxiliaryTypesMap } from './auxiliary-types.component';
import { GLOBAL_RENDERER_CONFIG, MARKDOC_GLOBAL_CONFIG } from './models';

@Injectable()
export class NgxMarkdocService {
  constructor(
    @Inject(MARKDOC_GLOBAL_CONFIG) private config: Partial<Config> | null,
    @Inject(GLOBAL_RENDERER_CONFIG) private rendererConfig: unknown | null
  ) {}

  compile(source: string): RenderableTreeNode {
    const ast = Markdoc.parse(source);
    const content = Markdoc.transform(ast, this.config ?? {});

    return content;
  }

  renderHTML(content: RenderableTreeNode): string {
    return Markdoc.renderers.html(content);
  }

  renderAngular(content: RenderableTreeNode, container: ViewContainerRef, renderer: Renderer2, text: TemplateRef<unknown>) {
    if (!content || !container) return;

    if (content instanceof Tag) {
      let type = AuxiliaryTypesMap[content.name];
      if (!type) type = (this.rendererConfig as any)[content.name];
      if (type) {
        const tagRef = container.createComponent(type);
        if (Object.keys(content.attributes).length > 0) {
          for (const key of Object.keys(content.attributes)) {
            if (key === 'class') {
              renderer.addClass(tagRef.location.nativeElement, content.attributes[key]);
            } else if (Object.prototype.hasOwnProperty.call((type as any).ɵcmp.inputs, key)) {
              if (content.name === 'hello' && key === 'name') {
                console.log('BEEEEE');
              }
              (tagRef.instance as any)[key] = content.attributes[key];
            } else {
              renderer.setAttribute(tagRef.location.nativeElement, key, content.attributes[key]);
            }
          }
        }

        if (Array.isArray(content.children) && content.children.length > 0) {
          for (const child of content.children) {
            this.renderAngular(child, tagRef.instance.vcr, renderer, text);
          }
        }
      } else {

      }
    } else if (typeof content === 'string') {
      container.createEmbeddedView(text, { $implicit: content });
      // renderer.appendChild(container.element.nativeElement.parentElement, renderer.createText(content));
    }
  }
}
