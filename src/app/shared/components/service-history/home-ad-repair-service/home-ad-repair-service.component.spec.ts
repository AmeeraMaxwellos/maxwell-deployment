import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdRepairServiceComponent } from './home-ad-repair-service.component';

describe('HomeAdRepairServiceComponent', () => {
  let component: HomeAdRepairServiceComponent;
  let fixture: ComponentFixture<HomeAdRepairServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdRepairServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdRepairServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
