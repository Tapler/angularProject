import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Equipment } from '../../models/interfaces/equipment';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
private _items: Equipment[] = [];

@Input() set items(value: Equipment[]){
    this._items = !!this._items && this._items.length > 0 
    ? [...this._items] 
    : []
  }

  get items(): Equipment[]{
    return this._items;
  }

@Output() onRowClick: EventEmitter<number>= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
