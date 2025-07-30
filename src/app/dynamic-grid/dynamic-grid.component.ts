import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, Output, ViewChild, viewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.scss'
})
export class DynamicGridComponent implements AfterViewInit{

  @Input() columns:string[] =[];
  @Input() dataSourceInput:any[]=[];
 @Output() contextActionClick = new EventEmitter<{ type: string; row: any }>();

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  ngAfterViewInit(){
    this.dataSource = new MatTableDataSource(this.dataSourceInput);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  applyFilter(event:Event){
    const value =(event.target as HTMLInputElement).value;
    this.dataSource.filter= value.trim().toLowerCase();
  }

  onContextActionClick(type: string, row: any) {
  this.contextActionClick.emit({ type, row });
}
}
