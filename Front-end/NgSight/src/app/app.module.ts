import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SectionSalesComponent } from "./sections/section-sales/section-sales.component";

import { SectionHealthComponent } from "./sections/section-health/section-health.component";
import { SectionOrdersComponent } from "./sections/section-orders/section-orders.component";
import { AppRouting } from "./app-routing.module";

import { LineChartComponent } from "./charts/line-chart/line-chart.component";
import { PieChartComponent } from "./charts/pie-chart/pie-chart.component";
import { BarChartComponent } from "./charts/bar-chart/bar-chart.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [BrowserModule, AppRouting, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
