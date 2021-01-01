import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../../service/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private activedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) { }

  productList: Product[];
  username: "ravik";

  ngOnInit(): void {
    this.activedRoute.params.subscribe(data => {
    
      if (data.id == undefined || data.id == 0) {
        this.productList = this.productService.getAllProducts();
      }
      else {
        this.productList = this.productService.getProductsByCategory(data.id);
      }
    });
  }

  addToCart(productId: number) {
    let login = localStorage.getItem("login") == "true";
    if (login) {
      this.cartService.addToCart(productId);
      this.openSnackBar("Added successfully");
    }
    else {
      this.openSnackBar("Please Login First!");
    }
  }

  openSnackBar(message: string) {
      this._snackBar.open(message, null, {
         duration: 2000,
      });
   } 
  
}
