import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormaccessoiresComponent } from './formaccessoires/formaccessoires.component';
import { FormalimentationComponent } from './formalimentation/formalimentation.component';
import { ListeproduitsComponent } from './listeproduits/listeproduits.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'admin',component:LoginComponent,
    children:[
      {path:'login', component:LoginComponent},
      {path:'dashbord', component:DashbordComponent,
        children:[
          {path:'', redirectTo:'liste', pathMatch:'full'},
          {path:'ajouteracces', component:FormaccessoiresComponent},
          {path:'liste', component:ListeproduitsComponent},
          {path:'ajouteralim', component:FormalimentationComponent}
      ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
