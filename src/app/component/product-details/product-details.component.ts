import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => { 
      this.product = this.productService.getProductDetialsById(data.id);
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
