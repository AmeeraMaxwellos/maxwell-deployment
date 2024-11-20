import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqQuestionDataComponent } from './faq-question-data.component';

describe('FaqQuestionDataComponent', () => {
  let component: FaqQuestionDataComponent;
  let fixture: ComponentFixture<FaqQuestionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqQuestionDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqQuestionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
