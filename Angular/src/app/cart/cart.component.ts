import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Item[] = [];
  constructor(private itemService: ItemService) { }

  getItemsForCart() : void{
    this.cartItems = this.itemService.getSelectedItems();
  }

  ngOnInit(): void {
    this.getItemsForCart();
  }

  removeItemFromCart(id: number) : void{
    this.itemService.removeItem(id);
  }

}
