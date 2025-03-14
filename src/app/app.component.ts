import { Component } from '@angular/core';
import {RouterOutlet, Routes} from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainBannerComponent } from './components/banner/main-banner.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BackgroundComponent } from './components/background/background.component';
import {CardComponent} from './components/card/card.component';
import {CardGridComponent} from './components/card-grid/card-grid.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, LayoutComponent, BackgroundComponent, MainBannerComponent, CardComponent, CardGridComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Musikas';
}
