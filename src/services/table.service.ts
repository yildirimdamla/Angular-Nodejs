import { Injectable } from '@angular/core';
import { table_example } from 'src/data/table-example';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor() {}
  GetTableRows() {
    return table_example;
  }
}
