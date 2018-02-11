import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
