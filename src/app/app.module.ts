import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';

import { ContactusComponent } from './contactus/contactus.component';
import {Routes,RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
const appRoutes:Routes=[
  {path:'',component:ContactusComponent},
  {path:'view',component:ViewComponent},
  {path:'search',component:SearchComponent}
]

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    
    ContactusComponent,
    SearchComponent,
    ViewComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [NavbarComponent,AppComponent]
})
export class AppModule { }
