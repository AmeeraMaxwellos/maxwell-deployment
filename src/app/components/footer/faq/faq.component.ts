import { Component } from '@angular/core';
import { FaqQuestionDataComponent } from '../faq-question-data/faq-question-data.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqQuestionDataComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  selectedCategory: string = 'General Questions';  // Default category

  // Function to change the category when a tab is clicked
  onCategorySelect(category: string) {
    this.selectedCategory = category;
  }
}


