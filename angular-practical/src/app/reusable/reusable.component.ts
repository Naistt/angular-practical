import { Component } from '@angular/core';
import { UiButtonComponent } from "../ui-button/ui-button.component";
import { UiDialogComponent } from "../ui-dialog/ui-dialog.component";
import { UiInputTextComponent } from "../ui-input-text/ui-input-text.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-reusable',
  standalone: true,
  imports: [UiButtonComponent, UiDialogComponent, UiInputTextComponent, DialogModule, CardModule],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.css'
})
export class ReusableComponent {
  dialogVisible: boolean = false;
  inputValue: any;


  onDialogClose() {
    console.log('Dialog closed.');
    this.dialogVisible = false;
    /* any other implementation... */
  }
  onInputChange($event: string) {
    console.log('Input has changed.');
    /* any other implementation... */
  }
  onButtonClick() {
    console.log('Button has been clicked. Dialog opening.');
    this.dialogVisible = true;
    /* any other implementation... */
  }

}
