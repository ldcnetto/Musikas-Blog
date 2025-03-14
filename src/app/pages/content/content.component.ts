import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { dataEmAlta } from '../../data/data';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import {LayoutComponent} from '../../components/layout/layout.component';

interface Card {
  id: string;
  title: string;
  banda: string;
  capa: string;
  alt: string;
  description: string;
  releaseDate: string;
  tracks: string[];
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe, RouterLink, LayoutComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  card: Card | undefined;
  title: string = "";
  banda: string = "";
  capa: string = "";
  alt: string = "";
  description: string = "";
  releaseDate: string = "";
  tracks: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.setValuesToComponent(id);
      }
    });
  }

  setValuesToComponent(id: string) {
    const data = dataEmAlta.find(item => item.id === id);
    if (data) {
      this.card = data;
      this.title = data.title;
      this.banda = data.banda;
      this.capa = data.capa;
      this.alt = data.alt;
      this.description = data.description;
      this.releaseDate = data.releaseDate;
      this.tracks = data.tracks;
    }
  }
}
