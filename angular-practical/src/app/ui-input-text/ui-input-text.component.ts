import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-ui-input-text',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule, InputTextModule],
  templateUrl: './ui-input-text.component.html',
  styleUrl: './ui-input-text.component.css'
})
export class UiInputTextComponent {
  @Input() value: string = '';         // Input value
  @Input() placeholder: string = '';   // Placeholder text
  @Input() type: string = 'text';      // Input type (e.g., text, password)
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>(); // Event emitter for value changes

  constructor() {}

  // Emit value changes to the parent
  onInputChange() {
    this.valueChange.emit(this.value);
  }
}
