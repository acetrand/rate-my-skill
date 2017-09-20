import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
