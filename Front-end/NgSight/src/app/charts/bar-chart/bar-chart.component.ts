import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

const SAMPLE_BARCHART_DATA: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 54, 30], label: "Q3 Sales" },
  { data: [25, 39, 60, 91, 36, 54, 50], label: "Q4 Sales" }
];

const SAMPLE_BARCHART_LABELS: Label[] = [
  "w1",
  "w2",
  "w3",
  "w4",
  "w5",
  "w6",
  "w7"
];

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.scss"]
})
export class BarChartComponent implements OnInit {
  constructor() {}

  public barChartData: ChartDataSets[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: Label[] = SAMPLE_BARCHART_LABELS;
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    responsive: true
  };

  ngOnInit() {}
}
