import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-main-banner',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {
  title:string = "MUSIC FEST";
  description:string = "Prepare-se para o Music Fest com DJ Miran, uma noite que promete incendiar seus sentidos! A partir das 18h, mergulhe em um aquecimento explosivo com o melhor do Dance Electro Rock, preparando o terreno para o clímax da noite. Às 21h, DJ Miran assume o comando, levando você a uma jornada sonora inesquecível com batidas pulsantes e melodias envolventes. Uma experiência única, onde a energia da música eletrônica se encontra com a atitude do rock, criando uma atmosfera vibrante e eletrizante. Não perca a chance de vivenciar essa celebração da música e da dança!";
  date:string = "01/01/2021";
  banner = "assets/images/banner.png";
  alt:string = "Banner image";
}
