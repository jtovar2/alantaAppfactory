import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PortfolioComponent} from './portfolio/portfolio.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [
{ path: 'portfolio', component: PortfolioComponent },
{ path: 'about', component: AboutComponent },
{ path: '', component: HomeComponent },
{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
