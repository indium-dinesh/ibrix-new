import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbrixAppComponent } from './ibrix-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptorService } from './interceptor/app-http-interceptor.service';
import { environment } from 'src/environments/environment';
import { MigrationService } from './migration/migration.service';
import { MigrationModule } from './migration/migration.module';
export const isMock = environment.mock;

@NgModule({
  declarations: [IbrixAppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MigrationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MigrationService,
    ...(isMock
      ? [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptorService,
            multi: true
          }
        ]
      : [])
  ]
})
export class IbrixAppModule {}
