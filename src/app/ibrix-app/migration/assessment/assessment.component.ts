import { Component, ViewChild } from '@angular/core';
import { MigrationService } from '../migration.service';
import { Subscription } from 'rxjs';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  NgApexchartsModule
} from 'ng-apexcharts';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';

export interface VisitorChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  tooltip: ApexTooltip | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  stroke: any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  title: any;
  theme: any;
}

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent {
  showSummary: boolean = false;
  selectDetailTable: string = 'db';
  selectSubDetailTable: string = 'ssp';
  dbDetails: boolean = false;
  displaySubdivision: boolean = false;
  @ViewChild('summaryCard') summaryCard!: CardComponent;
  @ViewChild('dbSummary') dbSummary!: CardComponent;
  customScriptBtn: any = { class: 'btn btn-outline-danger', icon: 'feather', label: 'Close detailed view' };

  selectTopCard(selection: string) {
    this.selectDetailTable = selection;
  }
  selectLowCard(selection: string) {
    this.selectSubDetailTable = selection;
  }
  openSubPanel() {
    this.summaryCard.minimizeCard();
    this.dbSummary.minimizeCard();
    this.displaySubdivision = true;
    this.selectSubDetailTable = 'ssp';
  }
  closeDetailedView() {
    this.displaySubdivision = false;
    this.summaryCard.expandedCard();
    this.dbSummary.expandedCard();
  }
}
