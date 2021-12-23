import { Component, OnInit } from '@angular/core';
import { Menu, MenuItem } from 'src/models/menu';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  readonly INTRO_PATH = location.href + '&types=';
  categories: Menu = new Menu([
    new MenuItem('Giới thiệu DumBum', this.INTRO_PATH + 0),
    new MenuItem('Thông tin chi tiết', this.INTRO_PATH + 1),
    new MenuItem('Liên hệ', this.INTRO_PATH + 2)
  ], 'VỀ CHÚNG TÔI');
  constructor() { }

  ngOnInit(): void {
  }

}
