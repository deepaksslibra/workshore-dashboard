import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';
import { ChartComponent } from './dashboard/components/chart/chart.component';
import { ListingComponent } from './dashboard/components/listing/listing.component';
import { ChartsComponent } from './dashboard/pages/charts/charts.component';
import { GeneralModule } from './general/general.module';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ChartComponent,
    ListingComponent,
    ChartsComponent,
    SidebarComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GeneralModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
