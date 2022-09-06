import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/staticdata/category';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categoryData: any[] = category.slice(0, 5);

  md: any = {
    initialSlide: 0,
    slidesPerView: 5,
    speed: 400,
  };
  constructor() {}

  ngOnInit() {}
}
