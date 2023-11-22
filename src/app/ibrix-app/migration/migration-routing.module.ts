import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtlScriptsComponent } from './etl-scripts/etl-scripts.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { MigrateDataComponent } from './migrate-data/migrate-data.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'configuration',
        component: ConfigurationComponent
      },
      {
        path: 'assessment',
        component: AssessmentComponent
      },
      {
        path: 'etl-scripts',
        component: EtlScriptsComponent
      },
      {
        path: 'migrate-data',
        component: MigrateDataComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MigrationRoutingModule {}
