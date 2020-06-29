import { Component, OnInit } from '@angular/core';
import { table_example } from 'src/data/table-example';
import { TableService } from 'src/services/table.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  table_example = table_example;

  constructor(private _tableservice: TableService) {}

  ngOnInit(): void {}
}
