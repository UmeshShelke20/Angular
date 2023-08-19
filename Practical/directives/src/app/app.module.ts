import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundcolorDirective } from './backgroundcolor.directive';
import { StructuralDicectiveComponent } from './structural-dicective/structural-dicective.component';
import { FormsModule } from '@angular/forms';
import { MouseEffectDirective } from './mouse-effect.directive'; 
@NgModule({
  declarations: [
    AppComponent,
    BackgroundcolorDirective,
    StructuralDicectiveComponent,
    MouseEffectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
