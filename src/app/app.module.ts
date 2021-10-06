import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './src/app/pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthLoadGuard } from './auth-load.guard';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AuthLoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
