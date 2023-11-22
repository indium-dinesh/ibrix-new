import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlScriptsComponent } from './etl-scripts.component';

describe('EtlScriptsComponent', () => {
  let component: EtlScriptsComponent;
  let fixture: ComponentFixture<EtlScriptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtlScriptsComponent]
    });
    fixture = TestBed.createComponent(EtlScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
