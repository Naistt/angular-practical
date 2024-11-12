import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, MenubarModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practical';
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}
  
  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => {
            this.router.navigate(['/']);
          }
      },
      {
        label: 'Generic Lists',
        icon: 'pi pi-list',
        command: () => {
          this.router.navigate(['/lists']);
        }
      },
      {
        label: 'Reusable',
        icon: 'pi pi-sync',
        command: () => {
          this.router.navigate(['/reusable']);
        }
      },
    ];
  }
}
