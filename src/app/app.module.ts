import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElemekComponent } from './elemek/elemek.component';
import { KukaComponent } from './kuka/kuka.component';
import { UjElemekComponent } from './uj-elemek/uj-elemek.component';

@NgModule({
  declarations: [
    AppComponent,
    ElemekComponent,
    KukaComponent,
    UjElemekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
