import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { TelephoneInputComponent } from '../../telephone-input/telephone-input.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-new-address',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, TelephoneInputComponent, CommonModule],
  templateUrl: './add-new-address.component.html',
  styleUrl: './add-new-address.component.css'
})
export class AddNewAddressComponent {

  countries = [
    {
      country: "Qatar",
      states: [
        "Doha", "Al Rayyan", "Al Wakrah", "Al Khor",
        "Umm Salal", "Al Daayen", "Madinat ash Shamal",
        "Al Shahaniya"
      ]
    },
    {
      country: "Saudi Arabia",
      states: [
        "Riyadh", "Mecca", "Madinah", "Eastern Province",
        "Asir", "Tabuk", "Hail", "Al Bahah",
        "Jazan", "Najran", "Al Jawf", "Northern Borders"
      ]
    },
    {
      country: "United Arab Emirates",
      states: [
        "Abu Dhabi", "Dubai", "Sharjah", "Ajman",
        "Umm Al-Quwain", "Fujairah", "Ras Al Khaimah"
      ]
    },
    {
      country: "Kuwait",
      states: [
        "Al Asimah", "Hawalli", "Mubarak Al-Kabeer",
        "Farwaniyah", "Ahmadi", "Jahra", "Salmiya"
      ]
    },
    {
      country: "Bahrain",
      states: [
        "Capital Governorate", "Muharraq Governorate",
        "Northern Governorate", "Southern Governorate"
      ]
    }
  ];

  addressForm: FormGroup;
  selectedCountry: any;
  states: string[] = [];

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      streetAddress: ['', Validators.required],
      state: ['', Validators.required],
      street: ['', Validators.required],
      zone: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      alternativePhoneNumber: [''],
      addressType: ['home'],
      billingSameAsShipping: [false]
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
    }
  }

  ngOnInit() {
    const defaultCountry = this.countries.find(country => country.country === 'Qatar');
    this.addressForm.patchValue({
      country: defaultCountry,
      state: defaultCountry?.states[0]
    });
  }

  onCountryChange(): void {
    const states = this.addressForm.value.country?.states || [];
    this.addressForm.patchValue({ state: states[0] });
  }
}
