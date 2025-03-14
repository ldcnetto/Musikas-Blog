import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainBannerComponent } from './components/banner/main-banner.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BackgroundComponent } from './components/background/background.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, LayoutComponent, BackgroundComponent, MainBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Musikas';
}
