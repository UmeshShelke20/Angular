import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './Decorator/parent2/parent2.component';
import { Child2Component } from './Decorator/child2/child2.component';
import { TwoWatDataBindingComponent } from './two-wat-data-binding/two-wat-data-binding.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { FuctionalityComponent } from './calculator/fuctionality/fuctionality.component';
import { FormComponent } from './form/form.component';
import { PersonalDetailsComponent } from './form/personal-details/personal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    TwoWatDataBindingComponent,
    CalculatorComponent,
    FuctionalityComponent,
    FormComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
