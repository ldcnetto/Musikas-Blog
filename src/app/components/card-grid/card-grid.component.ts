import {Component, Input} from '@angular/core';
import {CardComponent} from '../card/card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-card-grid',
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  @Input() cardData: any[] = [];

  ngOnInit(): void {
  }
}
