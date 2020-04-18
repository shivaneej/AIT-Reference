import { Component } from '@angular/core';
import { LOCATIONS } from './locations';
 
@Component({
  selector: 'app-locations',
  templateUrl: './locations-pure.component.html'
})
export class LocationsComponent {
  locations: any[] = [];
  camp = true;
  title = 'Trip Destinations (Pure)';
 
  constructor() { this.reset(); }
 
  addDestination(name: string) 
  {
    name = name.trim();
    if (!name) { return; }
    let dest = {name, camp: this.camp};
    this.locations.push(dest);
  }
  reset() { this.locations = LOCATIONS.slice(); }
}
 
@Component({
  selector: 'app-locations-impure',
  templateUrl: './locations-impure.component.html'
})
export class LocationsImpureComponent extends LocationsComponent {
  title = 'Trip Destinations (Impure)';
}
