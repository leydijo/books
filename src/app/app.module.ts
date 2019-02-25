import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentheaderComponent } from './componentheader/componentheader.component';
import { ComponentinputComponent } from './componentinput/componentinput.component';
import { ComponentlistComponent } from './componentlist/componentlist.component';
import { LibroscomponentComponent } from './libroscomponent/libroscomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentheaderComponent,
    ComponentinputComponent,
    ComponentlistComponent,
    LibroscomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
