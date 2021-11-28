import { Component, OnInit } from '@angular/core';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cities-card',
  templateUrl: './cities-card.component.html',
  styleUrls: ['./cities-card.component.css']
})
export class CitiesCardComponent implements OnInit {

  faBolt = faBolt; //bolt icon
  
  constructor() { }

  ngOnInit(): void {
  }

}
