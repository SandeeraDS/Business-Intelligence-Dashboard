import { Routes, RouterModule } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { SectionSalesComponent } from "./sections/section-sales/section-sales.component";
import { SectionOrdersComponent } from "./sections/section-orders/section-orders.component";
import { SectionHealthComponent } from "./sections/section-health/section-health.component";

const routes: Routes = [
  { path: "sales", component: SectionSalesComponent },
  { path: "orders", component: SectionOrdersComponent },
  { path: "health", component: SectionHealthComponent },
  { path: "", redirectTo: "/sales", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRouting {}
