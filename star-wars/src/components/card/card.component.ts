import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public imgPath: string = '';

  @Input() public name: string = '';

  @Input() public hability: string = '';

  @Input() public planet: string = '';

  @Input() public weapons: string = '';

  public openWindow(src: string) : void {
    window.open(src, '_blank');
  }
}
