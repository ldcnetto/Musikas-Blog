import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  id: string = "";
  @Input()
  title: string = "";
  @Input()
  banda: string = "";
  @Input()
  capa: string = "";
  @Input()
  alt: string = "";
}
