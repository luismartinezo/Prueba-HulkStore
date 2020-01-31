import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './Components/Products/list/list.component';
import { AddComponent } from './Components/Products/add/add.component';
import { EditComponent } from './Components/Products/edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/Home/home/home.component';
import { HeaderComponent } from './Share/header/header/header.component';
import { FooterComponent } from './Share/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
