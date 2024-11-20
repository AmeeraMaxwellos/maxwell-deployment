import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopComputerComponent } from './laptop-computer.component';

describe('LaptopComputerComponent', () => {
  let component: LaptopComputerComponent;
  let fixture: ComponentFixture<LaptopComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopComputerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
