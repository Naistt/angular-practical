import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-ui-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './ui-dialog.component.html',
  styleUrl: './ui-dialog.component.css'
})
export class UiDialogComponent {
  @Input() visible: boolean = false;         // Controls the visibility of the dialog
  @Input() header: string = '';              // Dialog header
  @Input() footer: string = '';              // Dialog footer (optional)
  @Input() styleClass: string = '';          // Custom CSS class for styling
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>(); // Event emitter for closing the dialog

  constructor() {}

  // Emit event when dialog is closed
  closeDialog() {
    this.onClose.emit();
  }
}
