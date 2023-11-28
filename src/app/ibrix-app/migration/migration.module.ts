import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { EtlScriptsComponent } from './etl-scripts/etl-scripts.component';
import { MigrateDataComponent } from './migrate-data/migrate-data.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SourceFormComponent } from './configuration/source-form/source-form.component';
import { TargetFormComponent } from './configuration/target-form/target-form.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ConfigurationComponent,
    AssessmentComponent,
    EtlScriptsComponent,
    MigrateDataComponent,
    SourceFormComponent,
    TargetFormComponent
  ],
  exports: [
    ConfigurationComponent,
    AssessmentComponent,
    EtlScriptsComponent,
    MigrateDataComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MigrationModule { }
