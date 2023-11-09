// migration-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EtlScriptsComponent } from './etl-scripts/etl-scripts.component';
import { MigrateDataComponent } from './migrate-data/migrate-data.component';

// migration-routing.module.ts
const migrationRoutes: Routes = [
    {
      path: 'migration',
      children: [
        { path: 'assessment', component: AssessmentComponent },
        { path: 'configuration', component: ConfigurationComponent },
        { path: 'etl-scripts', component: EtlScriptsComponent },
        { path: 'migrate-data', component: MigrateDataComponent },
        { path: '', redirectTo: 'assessment', pathMatch: 'full' } // Default route
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(migrationRoutes)],
    exports: [RouterModule]
  })
  export class MigrationRoutingModule { }