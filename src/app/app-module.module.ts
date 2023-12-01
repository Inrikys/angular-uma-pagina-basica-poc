import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ AppComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class AppModuleModule { }
