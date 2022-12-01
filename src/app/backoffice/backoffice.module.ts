import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormaccessoiresComponent } from './formaccessoires/formaccessoires.component';
import { FormalimentationComponent } from './formalimentation/formalimentation.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ListeproduitsComponent } from './listeproduits/listeproduits.component';


@NgModule({
  declarations: [
    FormaccessoiresComponent,
    FormalimentationComponent,
    LoginComponent,
    MenuComponent,
    DashbordComponent,
    ListeproduitsComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class BackofficeModule { }
