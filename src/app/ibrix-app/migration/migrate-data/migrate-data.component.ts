import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from 'src/app/theme/shared/models/chart.model';

@Component({
  selector: 'app-migrate-data',
  templateUrl: './migrate-data.component.html',
  styleUrls: ['./migrate-data.component.scss']
})
export class MigrateDataComponent {
  viewMigrateData: boolean = false;
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  customScriptBtn: any = { class: 'btn btn-outline-danger', icon: '', label: 'Close' };

  constructor() {
    this.chartOptions = {
      series: [66, 44],
      chart: {
        width: '100%',
        type: 'pie',
        height: 200
      },
      labels: ['Migrated', 'Unprocessed'],
      theme: {
        monochrome: {
          enabled: false
        }
      },
      legend: {
        position: 'bottom'
      },
      title: {
        text: 'Table'
      },
      colors: ['#4099ff', '#73b4ff']
    };
  }
  close() {
    this.viewMigrateData = false;
  }
}
