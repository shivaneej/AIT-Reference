import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './sample-items';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  selectedItems: Item[] = [];
  
  //method to get all items
  getItems() : Item[]{
    return ITEMS;
  }

  //method to get items added to cart
  getSelectedItems(): Item[] {
    return this.selectedItems;
  }

  //method to add item to cart
  addItem(id : number) : void {
    let item = ITEMS.find(ob => ob.itemId === id); //search item in the store
    if(this.selectedItems.indexOf(item) < 0){ //if item is not present in cart already
      this.selectedItems.push(item);
    }
  }

  //method to remove product from cart
  removeItem(id : number) : void {
    let item = this.selectedItems.find(ob => ob.itemId === id);
    let itemIndex = this.selectedItems.indexOf(item);
    this.selectedItems.splice(itemIndex, 1); //remove 1 element from index itemIndex
  }
}
