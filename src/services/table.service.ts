import { Injectable } from '@angular/core';
import { table_schema, table_example, NorthWind } from 'src/data/table-example';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<table_schema[]> {
    return this.http.get<table_schema[]>(`http://localhost:9060/table/list`);
  }
}
