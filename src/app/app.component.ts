import { Component } from '@angular/core';
import { Sneaker } from './models/item/item.model';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FirstDemo';
  itemList: Sneaker[] = [];
  total = 0;
  constructor(private itemService: ItemService) {
    this.itemList = this.itemService.itemList;
  }

  public getTotal() {
    this.total = this.itemService.purchase();
    console.log(this.total);
    return this.total;
  }
}
