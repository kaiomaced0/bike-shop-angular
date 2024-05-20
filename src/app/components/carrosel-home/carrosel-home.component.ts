import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home/home.service';
import { Carrossel } from '../../models/carrossel.model';

@Component({
  selector: 'app-carrosel-home',
  standalone: true,
  imports: [],
  templateUrl: './carrosel-home.component.html',
  styleUrl: './carrosel-home.component.css'
})
export class CarroselHomeComponent implements OnInit {
  currentSlide: number = 0;
  slideInterval: any;

  constructor(private router: Router, private service: HomeService) {
    this.startSlideShow();
  }
  carrossels: Carrossel[] = [];
  ngOnInit() {
    this.service.carrossel().subscribe((data: Carrossel[]) => {
      this.carrossels = data;
    });
  }
  moveSlide(direction: number): void {
    this.currentSlide += direction;
    this.currentSlide = (this.currentSlide + 3) % 3; // Assumindo 3 slides
    this.resetSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.moveSlide(1);
    }, 6000);
  }

  resetSlideShow(): void {
    clearInterval(this.slideInterval);
    this.startSlideShow();
  }
}
