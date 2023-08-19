import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomStringPipe } from './custom-string.pipe';
import { CustomNumberPipe } from './custom-number.pipe';
import { FormsModule } from '@angular/forms';
import { CustomNumber2Pipe } from './custom-number2.pipe';
import { LengthOfNumberPipe } from './length-of-number.pipe';
import { ReverseStringPipe } from './reverse-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomStringPipe,
    CustomNumberPipe,
    CustomNumber2Pipe,
    LengthOfNumberPipe,
    ReverseStringPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
