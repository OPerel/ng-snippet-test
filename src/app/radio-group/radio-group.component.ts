import { Component } from '@angular/core';

@Component({
  selector: 'radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
})
export class RadioComponent {
  handleClick(e: MouseEvent) {
    if ((e.target as HTMLButtonElement).value) {
      console.log('radio click: ', (e.target as HTMLButtonElement).value)
    }
  }
}
