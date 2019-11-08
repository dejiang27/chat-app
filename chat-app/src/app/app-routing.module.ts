import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ChatPageComponent} from './chat-page/chat-page.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},

  {path: 'login', component: LoginComponent},

  {path:'chat', component: ChatPageComponent, 
  canActivate:[LoggedInGuard]},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
