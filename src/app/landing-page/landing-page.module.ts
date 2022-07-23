import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page.routing';
import { LadingPageRoutigComponent } from './components/lading-page-routig/lading-page-routig.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { StaffComponent } from './components/staff/staff.component';
import { ProductsComponent } from './components/products/products.component';
import { PublishmentsComponent } from './components/publishments/publishments.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LadingPageRoutigComponent,
    NavBarComponent,
    ServicesComponent,
    AboutComponent,
    StaffComponent,
    ProductsComponent,
    PublishmentsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
