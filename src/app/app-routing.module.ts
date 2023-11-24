// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { IbrixAppComponent } from './ibrix-app/ibrix-app.component';
import { LoginComponent } from './ibrix-app/login/login.component';
import { ConfigurationComponent } from './ibrix-app/migration/configuration/configuration.component';
import { AssessmentComponent } from './ibrix-app/migration/assessment/assessment.component';
import { EtlScriptsComponent } from './ibrix-app/migration/etl-scripts/etl-scripts.component';
import { MigrateDataComponent } from './ibrix-app/migration/migrate-data/migrate-data.component';

const routes: Routes = [
  /**  New URL Paths */
  {
    path: '',
    component: IbrixAppComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'migration',
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
      
    ]
  },
  /**  Old URL Paths */
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics/dash-analytics.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart & map/core-apex/core-apex.component')
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms & tables/form-elements/form-elements.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/forms & tables/tbl-bootstrap/tbl-bootstrap.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
