import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryProductDetailsComponent } from './order-history-product-details.component';

describe('OrderHistoryProductDetailsComponent', () => {
  let component: OrderHistoryProductDetailsComponent;
  let fixture: ComponentFixture<OrderHistoryProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistoryProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
