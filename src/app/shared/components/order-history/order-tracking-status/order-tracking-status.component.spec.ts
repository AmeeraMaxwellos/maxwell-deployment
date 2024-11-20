import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackingStatusComponent } from './order-tracking-status.component';

describe('OrderTrackingStatusComponent', () => {
  let component: OrderTrackingStatusComponent;
  let fixture: ComponentFixture<OrderTrackingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderTrackingStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTrackingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
