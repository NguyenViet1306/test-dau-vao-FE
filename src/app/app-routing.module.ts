import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./companies/show/show.component";
import {EditComponent} from "./companies/edit/edit.component";
import {DeleteComponent} from "./companies/delete/delete.component";
import {CreateComponent} from "./companies/create/create.component";
import {InfoComponent} from "./companies/info/info.component";



const routes: Routes = [
  {path: '', component: ShowComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'info/:id', component: InfoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
