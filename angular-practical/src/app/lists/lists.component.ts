import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityService } from '../../service/cityservice';
import { City } from '../../model/city.model';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    FloatLabelModule,
    ListboxModule,
    CardModule
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css',
  providers: [CityService]
})
export class ListsComponent {
  @Input() items: string[] = [];

  newItem: string = '';
  cities!: City[]; // From mock API

  constructor(private cityService: CityService){
    this.getAllCities();
  }

  addItem() {
    console.log(123);
    if(this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getAllCities() {
    this.cityService.getCities().then((data) => (this.cities = data));
  }
}
