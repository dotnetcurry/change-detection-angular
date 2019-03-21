import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceComponent {

  @Input()
  placeDetails: Place;

  get IsVisited(): string {
    console.log('Finding if the place is visited...');
    return this.placeDetails.isVisited ? 'Yes' : 'No';
  }
}