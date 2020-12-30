import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { AuthGuard } from './_helpers';


const routes: Routes = [  
    
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent },
    

// otherwise redirect to home
{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
