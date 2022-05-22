import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-markdoc-hello',
  template: `Hello {{ name }}`
})
export class HelloComponent {
  @Input() public name?: string;
}
