import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/interfaces/Item';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item = {
    name: '',
    info: '',
    code: 0
  };

  edit: boolean = false;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit() {



  }

  submitItem() {
    this.itemService.createItem(this.item)
      .subscribe(
        res => this.router.navigate(['/']),
        err => console.log(err)
      );
    this.item = {
      name: '',
      info: '',
      code: 0
    };
  }

}
