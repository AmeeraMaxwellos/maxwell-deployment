import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDeviceModalComponent } from './choose-device-modal.component';

describe('ChooseDeviceModalComponent', () => {
  let component: ChooseDeviceModalComponent;
  let fixture: ComponentFixture<ChooseDeviceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseDeviceModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDeviceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
