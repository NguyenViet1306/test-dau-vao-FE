import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ShowComponent } from './companies/show/show.component';
import { EditComponent } from './companies/edit/edit.component';
import { DeleteComponent } from './companies/delete/delete.component';
import { CreateComponent } from './companies/create/create.component';
import { InfoComponent } from './companies/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
