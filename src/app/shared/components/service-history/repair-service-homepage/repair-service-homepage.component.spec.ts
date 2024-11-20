import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairServiceHomepageComponent } from './repair-service-homepage.component';

describe('RepairServiceHomepageComponent', () => {
  let component: RepairServiceHomepageComponent;
  let fixture: ComponentFixture<RepairServiceHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairServiceHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairServiceHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
