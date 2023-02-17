import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ArtformComponent } from './pages/artform/artform.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './units/footer/footer.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ArtformComponent,
    SignupComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
