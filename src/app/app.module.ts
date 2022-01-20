import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterCountByComponent } from './components/counter-count-by/counter-count-by.component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardThankYouSummaryComponent } from './components/dashboard-thank-you-summary/dashboard-thank-you-summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThankYouEntryComponent } from './components/thank-you-entry/thank-you-entry.component';
import { ThankYouListComponent } from './components/thank-you-list/thank-you-list.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { LearningResourcesModule } from './features/learning-resources/learning-resources.module';
import { reducers } from './reducers';
import { GiftsDataService } from './services/gifts-data.service';
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
    CounterComponent,
    CounterCountByComponent,
  ],
  imports: [
    BrowserModule,
    LearningResourcesModule, // Routed Feature Modules go before the module with the { path: '**' } thing.
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
  ],
  providers: [GiftsDataService], // services!
  bootstrap: [AppComponent],
})
export class AppModule {}
