import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ShowComponent } from './companies/show/show.component';
import { EditComponent } from './companies/edit/edit.component';
import { DeleteComponent } from './companies/delete/delete.component';
import { CreateComponent } from './companies/create/create.component';
import { InfoComponent } from './companies/info/info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent,
    InfoComponent,
    RoutingComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
