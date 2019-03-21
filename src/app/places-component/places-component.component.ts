import { Component, OnInit } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'app-places-component',
  templateUrl: './places-component.component.html',
  styleUrls: ['./places-component.component.css']
})
export class PlacesComponentComponent implements OnInit {
  places: Place[];

  selectedPlace: Place;

  constructor() { }

  ngOnInit() {
    this.places = [];
    this.places.push({ name: 'Charminar', city: 'Hyderabad', country: 'India', isVisited: true, rating: 4 });
    this.places.push({ name: 'Tower Bridge', city: 'London', country: 'UK', isVisited: false, rating: 4.5 });
    this.places.push({ name: 'Red Rocks Park', city: 'Denver', country: 'USA', isVisited: true, rating: 3 });
    this.places.push({ name: 'Taj Mahal', city: 'Agra', country: 'India', isVisited: false, rating: 5 });
    this.places.push({ name: 'Eiffel Tower', city: 'Paris', country: 'France', isVisited: true, rating: 4 });

    this.selectedPlace = this.places[0];
  }

  toggleVisited(place: Place) {
    this.places[2].isVisited = !this.places[2].isVisited;
    this.places[2] = { ...this.places[2] };
  }
}