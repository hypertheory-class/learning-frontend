import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@NgModule({
  declarations: [AppComponent, TitleBarComponent, DashboardComponent, ThankYouComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [], // services!
  bootstrap: [AppComponent],
})
export class AppModule {}
