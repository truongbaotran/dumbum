import { Component, OnInit } from '@angular/core';
import { categories, loadProducts, types } from 'src/models/dbcontext';
import { Menu, MenuItem } from 'src/models/menu';
import { Product, ProductBase } from 'src/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  readonly CATEGORY_PATH = location.href + '&type=';
  categories: Menu = new Menu([
    new MenuItem('Sản phẩm nổi bật', this.CATEGORY_PATH + 0),
    new MenuItem('Sản phẩm khuyến mãi', this.CATEGORY_PATH + 1),
    new MenuItem('Sản phẩm bán chạy', this.CATEGORY_PATH + 2),
    new MenuItem('Tất cả sản phẩm', this.CATEGORY_PATH + 3)
  ], 'DANH MỤC');

  products!: Product[];

  constructor() { }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);

    // url: http://localhost:1234/product-list?category=1&type=4
    //Bắt URL................................
   let category: number = parseInt(params.get('category')!);
   let type: number = parseInt(params.get('type')!);

    //Load data
    loadProducts(category, type)
      .then(data => data = this.products = data);
  }





}
