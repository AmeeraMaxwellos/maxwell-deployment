import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-question-data',
  standalone: true,
  imports: [NgClass,NgFor,NgClass],
  templateUrl: './faq-question-data.component.html',
  styleUrl: './faq-question-data.component.css'
})
export class FaqQuestionDataComponent {

  @Input() selectedCategory: string = 'General Questions';  // Get selected category from parent component
  activeIndex: number | null = null;

  // Categorized questions data
  accordionData = [
    {
      category: 'General Questions', 
      questions: [
        { title: 'How can I create an account?', content: 'You can create an account by clicking on the "Sign Up" button...' },
        { title: 'How to change my password?', content: 'To reset your password, there is a section under user profile.. ' },
        { title: 'How to recover my password if I forgot?', content: 'To recover your password, click on forgot password.. ' }

      ]
    },
    {
      category: 'Orders', questions: [
        { title: 'Can I modify or cancel my order?', content: 'Orders can be modified or canceled before shipment...' },
        { title: 'How can I track my order?', content: 'You can track your order by clicking on the "My Orders" section...' },
        { title: 'How do I place an order?', content: 'To place an order, select a product, add it to your cart...' }

      ]
    },
    {
      category: 'Payment', questions: [
        { title: 'What payment methods do you accept?', content: 'We accept credit cards, PayPal, and bank transfers...' }
      ]
    },
    {
      category: 'Shipping', questions: [
        { title: 'What are your shipping options?', content: 'We offer standard and express shipping...' }
      ]
    },
    {
      category: 'Returns & Refunds', questions: [
        { title: 'What is your return policy?', content: 'Items can be returned within 30 days of purchase...' }
      ]
    }
  ];

  // Function to filter questions based on the selected category
  getFilteredQuestions() {
    const categoryData = this.accordionData.find(item => item.category === this.selectedCategory);
    return categoryData ? categoryData.questions : [];
  }

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

}
