import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRepairAdComponent } from './about-repair-ad.component';

describe('AboutRepairAdComponent', () => {
  let component: AboutRepairAdComponent;
  let fixture: ComponentFixture<AboutRepairAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRepairAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRepairAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
