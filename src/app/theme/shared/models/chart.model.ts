import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexTheme,
  ApexResponsive,
  ApexMarkers,
  ApexTitleSubtitle,
  ApexAnnotations
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  tooltip: ApexTooltip | any;
  labels: string[] | any;
  colors: string[] | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
  grid: ApexGrid | any;
  theme: ApexTheme | any;
  responsive: ApexResponsive[] | any;
  markers: ApexMarkers | any;
  title: ApexTitleSubtitle | any;
  annotations: ApexAnnotations | any;
};
