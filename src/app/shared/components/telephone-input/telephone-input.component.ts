import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-telephone-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TelephoneInputComponent),
      multi: true
    }
  ],
  templateUrl: './telephone-input.component.html',
  styleUrls: ['./telephone-input.component.css']
})
export class TelephoneInputComponent implements ControlValueAccessor, OnInit {

  countries = [
    { name: 'Qatar', flag: 'images/flags/QA.png', dialCode: '+974' },
    { name: 'UAE', flag: 'images/flags/AE.png', dialCode: '+971' },
    { name: 'Saudi Arabia', flag: 'images/flags/SA.png', dialCode: '+966' },
    { name: 'Kuwait', flag: 'images/flags/KW.png', dialCode: '+965' },
    { name: 'Bahrain', flag: 'images/flags/BH.png', dialCode: '+973' }
  ];

  phoneNumber: string = '';
  selectedCountry: any;
  isOpen = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  ngOnInit(): void {
    this.selectedCountry = this.countries[0];
  }

  writeValue(value: any): void {
    if (value) {
      this.phoneNumber = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectCountry(country: any): void {
    this.selectedCountry = country;
    this.isOpen = false;
    this.updatePhoneNumber();
  }

  updatePhoneNumber(): void {
    this.onChange(`${this.selectedCountry.dialCode}`);
  }

  onInput(): void {
    this.updatePhoneNumber();
  }

}
