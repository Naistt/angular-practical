import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css'
})
export class UiButtonComponent {
  @Input() label: string = '';       // Label for the button
  @Input() icon: string = '';        // Optional icon class
  @Input() styleClass: string = '';  // Custom CSS class
  @Input() disabled: boolean = false; // Disable the button if true
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>(); // Button click event

  constructor() {}

  // Emit event on button click
  handleClick() {
    this.onClick.emit();
  }
}
