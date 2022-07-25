import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() locations: string[];

  moveUp(location) {
    let oldIndex = this.locations.indexOf(location)
    this.locations.splice(oldIndex, 1, this.locations[oldIndex-1])
    this.locations.splice(oldIndex -1, 1, location)
    return this.locations
  }
  
  moveDown(location) {
    let oldIndex = this.locations.indexOf(location)
    this.locations.splice(oldIndex, 1, this.locations[oldIndex+1])
    this.locations.splice(oldIndex +1, 1, location)
    return this.locations
  }

  // Used for rendering
  getClasses(ctx, index) {
    let classes = `material-icons ${ctx}`;
    if (ctx === 'dots') {
      if (this.isLast(index)) {
        classes += ' hidden';
      }
    } else {
      classes += this.isLast(index) ? ' small' : ' x-small';
      if (index === 0) {
        classes += ' first';
      }
    }
    return classes;
  }

  // Used for rendering
  isLast(index) {
    return index === this.locations.length - 1;
  }
}
