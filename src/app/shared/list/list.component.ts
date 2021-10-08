import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Equipment } from '../../models/interfaces/equipment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  private _items: Equipment[] = [];

  @Input() public set items(_items: Equipment[]) {
    this._items = !!_items && _items.length > 0 ? [..._items] : [];
    this.cd.detectChanges();
  }

  public get items(): Equipment[] {
    return this._items;
  }

  @Output() readonly onRowClick: EventEmitter<number> = new EventEmitter<number>(); 

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.items);
  }

  public rowClick(id: number): void {
    console.log(id);
    this.onRowClick.emit(id);
  }

}
