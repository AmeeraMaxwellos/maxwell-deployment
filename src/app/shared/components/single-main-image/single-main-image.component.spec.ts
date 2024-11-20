import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMainImageComponent } from './single-main-image.component';

describe('SingleMainImageComponent', () => {
  let component: SingleMainImageComponent;
  let fixture: ComponentFixture<SingleMainImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMainImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMainImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
