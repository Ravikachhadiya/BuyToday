import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products-by-search',
  templateUrl: './products-by-search.component.html',
  styleUrls: ['./products-by-search.component.css']
})
export class ProductsBySearchComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute, private productService: ProductService) { }

  productList: Product[];
  searchedWord: string;

  ngOnInit(): void {
    this.activedRoute.params.subscribe(data => {
      this.searchedWord = data.word;
      this.productList = this.productService.getProductsBySearch(data.word);
    });
  }

}
