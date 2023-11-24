import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiBasicRoutingModule } from './ui-basic-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiBasicRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiBasicModule {}
