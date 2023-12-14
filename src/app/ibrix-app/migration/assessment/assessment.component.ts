import { Component } from '@angular/core';
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
  NgApexchartsModule,
} from 'ng-apexcharts';

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
  title: any,
  theme: any
}

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent {
  private dbSubscribe !: Subscription;
  sourceList: any = [];
  showSummary: boolean = false;




  constructor(private service: MigrationService) { }


  private targetSubscribe !: Subscription;
  displayTargetTable: boolean = true;
  targetList: any = [];
  customTargetBtn: any = { class: 'btn btn-outline-primary', icon: 'feather icon-plus-squre', label: 'Add Target Connection' }
  targetData: any;
  addNewTarget() {
    this.displayTargetTable = !this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable ? 'Add Target Connection' : 'Back';
    this.targetData = {
      title: 'Target',
      edit: 'add',
    }
  }
  submitTargetForm(data: any) {
    console.log("Submit Form", data)
  }
  closeTargetForm() {
    this.displayTargetTable = !this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable ? 'Add Target Connection' : 'Back';
  }
  editTarget(row: any) {
    this.displayTargetTable = !this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable ? 'Add Target Connection' : 'Back';
    this.targetData = {
      title: 'Target',
      edit: 'edit',
      data: row
    }
  }
  viewTarget(row: any) {
    this.displayTargetTable = !this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable ? 'Add Target Connection' : 'Back';
    this.targetData = {
      title: 'Target',
      edit: 'view',
      data: row
    }
  }

  ngOnInit() {
    this.dbSubscribe = this.service.getAllDBdata().subscribe({
      next: (res) => {
        console.log("API response", res);
        this.targetList = res;
      },
      error: (error) => {
        console.log("error ", error)
      }
    })
  }
  ngOnDestroy(): void {
    if (this.dbSubscribe) this.dbSubscribe.unsubscribe();
  }

  /*  old assessment ui >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */















}
