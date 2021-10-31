import { RoleGuard } from './core/guards/role.guard';
import { CanLoadGuard } from './core/guards/can-load.guard';
import { ProductResolver } from './core/guards/product.resolver';
import { LoadingGuard } from './core/guards/loading.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ChildrenGuard } from '@app/guards/children.guard';

const appRoutes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  /*
    { path: 'login', component: LoginComponent },
    { path: 'login/new', component: NewLoginComponent },
    { path: 'signup', component: SignupComponent },
    {
      path: 'team/:id', component: TeamComponent,
      children: [
        { path: '', redirectTo: 'add', pathMatch: 'full' },
        { path: 'add', component: AddTeamComponent },
        { path: 'edit', component: EditTeamComponent }
      ]
    },*/
  {
    path: 'products',
    loadChildren: () => import('@modules/products.module').then(m => m.ProductsModule),
    canLoad: [CanLoadGuard],
    canActivate: [RoleGuard],
    data: { role: 'admin' }
  }
  //{ path: '**', component: NotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
