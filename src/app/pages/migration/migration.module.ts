import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { EtlScriptsComponent } from './etl-scripts/etl-scripts.component';
import { MigrateDataComponent } from './migrate-data/migrate-data.component';



@NgModule({
  declarations: [
    ConfigurationComponent,
    AssessmentComponent,
    EtlScriptsComponent,
    MigrateDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MigrationModule { }
