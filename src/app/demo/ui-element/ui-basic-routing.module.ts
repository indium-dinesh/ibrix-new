import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ButtonComponent from './button/button.component';
import BreadcrumbComponent from './breadcrumb/breadcrumb.component';
import CollapseComponent from './collapse/collapse.component';
import TabsPillsComponent from './tabs-pills/tabs-pills.component';
import TypographyComponent from './typography/typography.component';
import BadgeComponent from './badge/badge.component';
import { MigrateDataComponent } from 'src/app/ibrix-app/migration/migrate-data/migrate-data.component';
import { EtlScriptsComponent } from 'src/app/ibrix-app/migration/etl-scripts/etl-scripts.component';
import { AssessmentComponent } from 'src/app/ibrix-app/migration/assessment/assessment.component';
import { ConfigurationComponent } from 'src/app/ibrix-app/migration/configuration/configuration.component';

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
      },
      {
        path: 'badges',
        component: BadgeComponent
      },
      {
        path: 'button',
        component: ButtonComponent
      },
      {
        path: 'breadcrumb-paging',
        component: BreadcrumbComponent
      },
      {
        path: 'collapse',
        component: CollapseComponent
      },
      {
        path: 'tabs-pills',
        component: TabsPillsComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
