import { Component } from '@angular/core';

@Component({
  selector: 'ngx-markdoc-root',
  template: `
    <div style="display: flex; flex-direction: row; gap: 10px">
      <div style="width: 100%; padding: 0px 16px">
        <ngx-markdoc [data]="data" renderer="html"></ngx-markdoc>
      </div>
      <div style="width: 100%; padding: 0px 16px">
        <ngx-markdoc [data]="data" renderer="angular"></ngx-markdoc>
      </div>
    <div>
  `
})
export class AppComponent {
  data = `## MarkDOC Angular Test {% #h2-id .custom-class-name-here %}
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`

  {% hello name="Trag" #angular-element .custom-class-name /%}

  Hello {% $user.name %}

  ---
  title: What is Markdoc?
  ---

  # {% $markdoc.frontmatter.title %} {% #overview %}

  ## Link
  [our public docs](http://stripe.com/docs)

  ## Image
  ![Image](https://github.com/richnologies/ngx-stripe/raw/main/docs/logos/ngx-stripe-logo.png)

  This is just a text

  Here is another text

  Here is a **bold** text

  Here is a _italic_ text

  \`Inline code\`

  .................
  $ ls *.sh
  $ mv *.sh ~/tmp
  .................

  ### Lists
  1. Ordered list
  2. Another bullet point

  1) Ordered list
  2) Another bullet point

  - Unordered list
  - Another unordered bullet

  * Unordered list
  * Another unordered bullet

  ### Blockquote
  > Blockquote to the max

  ### Table
  {% table width="100%" %}

  - Function {% width="25%" %}
  - Returns  {% colspan=2 %}
  - Example  {% align="right" %}

  {% /table %}

  {% test foo={bar: [1, 2, 3]} %}
    This is a test
  {% /test %}
  ---`;
}
