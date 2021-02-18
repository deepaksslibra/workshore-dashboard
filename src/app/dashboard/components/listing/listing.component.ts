import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataView } from 'primeng/dataview';
import { GenericListItem } from '../../models';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  @ViewChild('dv') dataRef: DataView | undefined;
  @Output() searchTermChange = new EventEmitter<string>();
  @Input() list: GenericListItem[] = [
    { id: 0, value: 'Item 1' },
    { id: 1, value: 'Item 2' },
    { id: 2, value: 'Item 3' },
    { id: 3, value: 'Item 4' },
    { id: 4, value: 'Item 5' },
  ];
  searchTerm = '';

  ngOnInit() {}

  onSearchTermChange(text: any) {
    this.dataRef?.filter(text);
    this.searchTermChange.emit(text);
  }
}
