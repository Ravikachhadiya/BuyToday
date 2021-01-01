import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private activedRoute: ActivatedRoute,
    private cartService: CartService,
    private _snackBar: MatSnackBar
  ) { }

  cartDetails: Cart[];
  subtotal: number;

  ngOnInit(): void {
    this.activedRoute.params.subscribe(data => { 
      this.cartDetails = this.cartService.getCartDetails(data.username);
    });
    this.subtotalCalculate();
    console.log(this.cartDetails);
  }

  subtotalCalculate() {
    this.subtotal = this.cartDetails.reduce((total, product) => total += (product.price * product.quantity), 0);
  }

  quantityUpdate(qty: number, productId: number) {
    for (let i = 0; i < this.cartDetails.length; i++){
      if (this.cartDetails[i].productId == productId) {
        this.cartDetails[i].quantity = qty;
        break;
      }
    }
    this.subtotalCalculate();
    this.cartService.quantityUpdate(qty, productId);
  }

  deleteFromCart(productId: number) {
    this.cartService.deleteFromCart(productId);
    this.activedRoute.params.subscribe(data => { 
      this.cartDetails = this.cartService.getCartDetails(data.username);
    });
    this.subtotalCalculate();
    this.openSnackBar("Deleted Successfully");
  }

  openSnackBar(message: string) {
      this._snackBar.open(message, null, {
         duration: 2000,
      });
  }

  proccedToBuy() {
    this.openSnackBar("Order Delivered");
  }

}
