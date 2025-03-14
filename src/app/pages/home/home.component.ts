import {Component, Input} from '@angular/core';
import {BackgroundComponent} from '../../components/background/background.component';
import {CardGridComponent} from '../../components/card-grid/card-grid.component';
import {LayoutComponent} from '../../components/layout/layout.component';
import {MainBannerComponent} from '../../components/banner/main-banner.component';
import {dataEmAlta} from '../../data/data';

@Component({
  selector: 'app-home',
  imports: [
    BackgroundComponent,
    CardGridComponent,
    LayoutComponent,
    MainBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() cardData: any[] = dataEmAlta;

  ngOnInit(): void {

  }
}
