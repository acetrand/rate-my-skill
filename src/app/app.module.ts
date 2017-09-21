import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdListModule, MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SkillAdderComponent } from './skill-adder.component';
import { SkillItemComponent } from './skill-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillAdderComponent,
    SkillItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
