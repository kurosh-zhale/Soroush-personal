import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPageRoutigComponent } from './components/lading-page-routig/lading-page-routig.component';

const routes: Routes = [
  {
    path:'',
    component:LadingPageRoutigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
