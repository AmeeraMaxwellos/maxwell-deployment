import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplePromotionComponent } from './triple-promotion.component';

describe('TriplePromotionComponent', () => {
  let component: TriplePromotionComponent;
  let fixture: ComponentFixture<TriplePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriplePromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriplePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
