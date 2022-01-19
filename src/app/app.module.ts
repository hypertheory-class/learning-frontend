import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThankYouEntryComponent } from './components/thank-you-entry/thank-you-entry.component';
import { ThankYouListComponent } from './components/thank-you-list/thank-you-list.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { GiftsDataService } from './services/gifts-data.service';
import { DashboardThankYouSummaryComponent } from './components/dashboard-thank-you-summary/dashboard-thank-you-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    DashboardComponent,
    ThankYouComponent,
    NavigationComponent,
    ThankYouEntryComponent,
    ThankYouListComponent,
    DashboardThankYouSummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [GiftsDataService], // services!
  bootstrap: [AppComponent],
})
export class AppModule {}
