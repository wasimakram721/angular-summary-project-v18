import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { DynamicGridComponent } from '../../dynamic-grid/dynamic-grid.component';
import { UsersServiceService } from '../../service/users-service.service';
import { USERS_COLUMNS } from '../../model.ts/user-data';
import { Router } from '@angular/router';
import { TableComponent } from '../../reusable/table/table.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userssummaryview',
  standalone: true,
  imports: [
    CommonModule,
    DynamicGridComponent,
    TableComponent,
    FormsModule
  ],
  templateUrl: './userssummaryview.component.html',
  styleUrl: './userssummaryview.component.scss'
})


export class UserssummaryviewComponent {
  columnArray:string[] = ['Location', 'Code', 'Action'];

  // array :string[] = ['Location', 'Code', 'Action'];

  constructor(private usersservice:UsersServiceService, private router : Router){}

  user = computed(() => this.usersservice.usersSummaryRowInfo());
  columns=USERS_COLUMNS;

  onGridAction(event:{type:string ; row:any}){
    console.log('Action clicked in view screen:', event);
  }

  backsummary(){
    this.usersservice.clear();
    this.router.navigate(['/']);
  }

  userData =[
    {id: 1, name: 'Wasim'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Alice'},
  ]

  filterData = [...this.userData];
  searchText = '';

  onSearch(){
  //   const search = this.searchText.trim().toLowerCase();
  //    this.filterData = this.userData.filter(user => {
  //   const idMatch = user.id === Number(search);
  //   const nameMatch = user.name.toLowerCase().includes(search);
  //   return idMatch || nameMatch;
  // });
  // const search = this.searchText.trim().toLowerCase();
  // this.filterData = this.userData.filter( data =>{
  //   const idMatch = data.id === Number(search);
  //   const nameMatch = data.name.toLowerCase().includes(search);
  //   return idMatch || nameMatch;
  // })
 const search = this.searchText.trim().toLowerCase();
 this.filterData = this.userData.filter(data =>{
  const idMatch = data.id === Number(search);
  const nameMatch = data.name.toLowerCase().includes(search);
  return idMatch || nameMatch
 })
  }
}
