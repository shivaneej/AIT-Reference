import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeItems: Item[] = [];
  constructor(private itemService : ItemService) { }
  getStoreItems() : void{
    this.storeItems = this.itemService.getItems(); //call the method to get all store items
  }

  ngOnInit() : void{
    this.getStoreItems();
  }

  addItemInCart(id : number) : void{
    this.itemService.addItem(id);
  }

}
