import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page.routing';
import { LadingPageRoutigComponent } from './components/lading-page-routig/lading-page-routig.component';


@NgModule({
  declarations: [
    LadingPageRoutigComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
