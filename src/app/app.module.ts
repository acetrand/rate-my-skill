import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdListModule, MdInputModule, MdIconModule } from '@angular/material';
import { BackandService } from '@backand/angular2-sdk';

import { AppComponent } from './app.component';
import { SkillAdderComponent } from './skill-adder.component';
import { SkillItemComponent } from './skill-item.component';
import { SkillRaterComponent } from './skill-rater.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillAdderComponent,
    SkillItemComponent,
    SkillRaterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdIconModule
  ],
  providers: [BackandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
