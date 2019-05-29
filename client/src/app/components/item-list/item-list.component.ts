import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';
import { Item } from '../../interfaces/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(private itemSercice: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemSercice.getItems().subscribe(
      res => this.items = res,
      err => console.log(err)
    );
  }

  deleteItem(id: string): void {
    this.itemSercice.deleteItem(id).subscribe(
      res => this.getItems(),
      err => console.log(err)
    );
  }
}
