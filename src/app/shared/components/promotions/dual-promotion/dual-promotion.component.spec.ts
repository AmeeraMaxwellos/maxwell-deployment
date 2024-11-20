import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualPromotionComponent } from './dual-promotion.component';

describe('DualPromotionComponent', () => {
  let component: DualPromotionComponent;
  let fixture: ComponentFixture<DualPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DualPromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
