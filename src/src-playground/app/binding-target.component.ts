import { Component, Input } from '@angular/core';

@Component({
  selector: 'binding-target',
  template: `
  <p><b>{{title}}</b></p>
  <hr/>
  <p [style.color]="'red'">RED</p>
  <p [ngStyle]="{ color:'blue' }">BLUE</p>
  <p [ngClass]="{ green:true }">GREEN</p>
  <p [ngStyle]="defaultStyles">{{ 'DEFAULT color is ' + defaultColor }}</p>
  `,
  styles: [
    `.green { color: green; }`
  ]
})
export class BindingTargetComponent {
  @Input() defaultColor = 'red';
  title = 'Binding Target';
  ngClass = {};
  defaultStyles = {
      color: this.defaultColor
  }
}

