import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {}

  ngDoBootstrap() {

    // This will convert angular component to stander web component
    const el = createCustomElement(AppComponent, {
      injector: this.injector
    });

    // Create your own custome element name in browser 
    customElements.define('web-component-root', el);
  }

}
