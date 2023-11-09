// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AdminModule } from './admin/admin.module';
import { AimlOpsModule } from './aiml-ops/aiml-ops.module';
import { MigrationModule } from './migration/migration.module';
import { SupportModule } from './support/support.module';

// project import
const homeRoutes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [
        { path: 'admin', loadChildren: () => AdminModule },
        { path: 'aiml-ops', loadChildren: () => AimlOpsModule },
        { path: 'migration', loadChildren: () => MigrationModule },
        { path: 'support', loadChildren: () => SupportModule },
        { path: '', redirectTo: 'migration', pathMatch: 'full' } // Default route
      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
