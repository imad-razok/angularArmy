import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeAr from '@angular/common/locales/ar';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecoundComponentComponent } from './secound-component/secound-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { FivethComponentComponent } from './fiveth-component/fiveth-component.component';
import { SixthComponentComponent } from './sixth-component/sixth-component.component';

registerLocaleData(localeAr, 'ar');
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecoundComponentComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
    FivethComponentComponent,
    SixthComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar-EG' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
