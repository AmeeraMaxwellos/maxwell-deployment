import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmedDetailsComponent } from './order-confirmed-details.component';

describe('OrderConfirmedDetailsComponent', () => {
  let component: OrderConfirmedDetailsComponent;
  let fixture: ComponentFixture<OrderConfirmedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderConfirmedDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderConfirmedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
