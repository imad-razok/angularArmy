import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import localeAr from '@angular/common/locales/ar';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DefaultImage } from './default-image.pipe';
import { SumPipe } from './sum.pipe';

registerLocaleData(localeAr, 'ar');
@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    DefaultImage,
    SumPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar-EG' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
