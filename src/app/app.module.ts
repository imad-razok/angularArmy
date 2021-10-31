import { ShardModuleModule } from './shard-module/shard-module.module';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeAr from '@angular/common/locales/ar';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
registerLocaleData(localeAr, 'ar');


/*const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];*/
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TeamComponent,
    NotFoundComponent,
    HomeComponent,
    NewLoginComponent,
    AddTeamComponent,
    EditTeamComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    ShardModuleModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar-EG' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
