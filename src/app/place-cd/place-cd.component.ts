import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Place } from '../place';

@Component({
  selector: 'app-place-cd',
  templateUrl: './place-cd.component.html',
  styleUrls: ['./place-cd.component.css']
})
export class PlaceCdComponent implements AfterViewInit {

  travelCost: number;
  constructor(private cdr: ChangeDetectorRef){
    setInterval(() => {
      this.travelCost = Math.round(Math.random() * 10000);
    }, 100);
  }

  getCurrentCost() {
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  reattach() {
    this.cdr.reattach();
  }

  detach() {
    this.cdr.detach();
  }

  @Input()
  placeDetails: Place;

  get IsVisited(): string {
    console.log('Finding if the place is visited...');
    return this.placeDetails.isVisited ? 'Yes' : 'No';
  }
}