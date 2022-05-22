import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMarkdocModule } from 'ngx-markdoc';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.componen';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    NgxMarkdocModule.forRoot({
      config: {
        tags: {
          hello: {
            render: 'hello',
            attributes: {
              name: {
                type: 'String',
              },
            },
          },
        },
        variables: {
          user: {
            name: 'Ricardo'
          }
        }
      },
      rendererOptions: {
        hello: HelloComponent
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
