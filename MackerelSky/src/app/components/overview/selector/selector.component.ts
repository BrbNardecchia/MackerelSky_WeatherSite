import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  cities = new FormControl();
  CitiesList: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.CitiesList = ['Roma', 'Firenze', 'Milano', 'Perugia', 'Napoli', 'Bari', 'Palermo', 'Cagliari'];
  }

  isOptionDisabled(city: string): any {
    if (this.cities.value) {
      return this.cities.value.length >= 3 && !this.cities.value.find((el: any) => el == city)
    }
  }

}
