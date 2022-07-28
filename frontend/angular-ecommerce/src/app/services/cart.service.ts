import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  storage: Storage = localStorage;

  constructor() { 
    let data = JSON.parse(this.storage.getItem('cartItems')!);

    if (data != null){
      this.cartItems = data;
    }

    this.computeCartTotals();
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(theCartItem: CartItem){

    // check if we have the item in our cart
    let existingCartItem: CartItem | undefined;

    if (this.cartItems.length > 0){
      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);
    }
      if(existingCartItem != undefined){
        existingCartItem.quantity = existingCartItem.quantity! + 1;
      } else {
        this.cartItems.push(theCartItem);
      }

      // compute cart total price and total quantity
      this.computeCartTotals();
      
  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity! * currentCartItem.unitPrice!;
      totalQuantityValue += currentCartItem.quantity!;

      this.totalPrice.next(totalPriceValue);
      this.totalQuantity.next(totalQuantityValue);
    }

    this.persistCartItems();
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity!--;

    if (theCartItem.quantity! == 0) {
      this.remove(theCartItem);
    } else {
      this.computeCartTotals();
    }
  }
  remove(theCartItem: CartItem) {
   // get index of item in the array
   const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id);

   if(itemIndex > -1) {

    this.cartItems.splice(itemIndex, 1);

    this.computeCartTotals();
    
   }
  }



  
}
