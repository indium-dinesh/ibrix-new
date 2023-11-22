import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbrixAppComponent } from './ibrix-app.component';

describe('IbrixAppComponent', () => {
  let component: IbrixAppComponent;
  let fixture: ComponentFixture<IbrixAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbrixAppComponent]
    });
    fixture = TestBed.createComponent(IbrixAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
