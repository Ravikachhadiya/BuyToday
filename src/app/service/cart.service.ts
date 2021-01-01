import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { User } from '../model/user';
import { ProductService } from './product.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private userServices: UserService, private productsService: ProductService) { }

  getCartDetails(username: string): Cart[]{
    const cartDetails = this.userServices.getCartDetailsByUsername(username);
    let cart: Cart[] = [];
    
    // cart details fetching
    cartDetails.map((product) => {
      const productDetails = this.productsService.getProductDetialsById(product.id);
      cart.push({
        productId: productDetails.id,
        price: productDetails.price,
        productName: productDetails.title,
        quantity: product.quantity,
        img: productDetails.poster
      });
      return product;
    });

    return cart;
  }

  addToCart(productId: number) {
    let user: User = JSON.parse(localStorage.getItem("user"));
    let userDetails = this.userServices.getUserInfoByUsername(user.username);
    let flag = false;

    // check whether the product is already in to cart or not
    for (let i = 0; i < userDetails.cart.length; i++){
      if (userDetails.cart[i].id == productId) {
        userDetails.cart[i].quantity++;
        flag = true;
        break;
      }
    }

    // if product is not in to cart
    if (!flag) {
      userDetails.cart.push({
        id: productId,
        quantity: 1
      });
    }

    console.log(userDetails);
  }

  deleteFromCart(productId: number) {
    let user: User = JSON.parse(localStorage.getItem("user"));
    let userDetails = this.userServices.getUserInfoByUsername(user.username);

    // find Product and delete it from cart
    for (let i = 0; i < userDetails.cart.length; i++){
      if (userDetails.cart[i].id == productId) {
        userDetails.cart.splice(i,1);
        break;
      }
    }
  }

  quantityUpdate(quantity: number, productId: number) {
    let user: User = JSON.parse(localStorage.getItem("user"));
    let userDetails = this.userServices.getUserInfoByUsername(user.username);
    let flag = false;

    // check whether the product is already in to cart or not
    for (let i = 0; i < userDetails.cart.length; i++){
      if (userDetails.cart[i].id == productId) {
        userDetails.cart[i].quantity = quantity;
        flag = true;
        break;
      }
    }

    console.log(userDetails);
  }
}
