import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyInfoComponent } from './my-info/my-info.component';
// import {HttpM}


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailComponent,
    LoginComponent,
    MyInfoComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
