import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressManagementComponent } from './user-address-management.component';

describe('UserAddressManagementComponent', () => {
  let component: UserAddressManagementComponent;
  let fixture: ComponentFixture<UserAddressManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddressManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddressManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
