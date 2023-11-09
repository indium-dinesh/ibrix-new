import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateDataComponent } from './migrate-data.component';

describe('MigrateDataComponent', () => {
  let component: MigrateDataComponent;
  let fixture: ComponentFixture<MigrateDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigrateDataComponent]
    });
    fixture = TestBed.createComponent(MigrateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
