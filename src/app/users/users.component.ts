import { Component } from '@angular/core';
import { DynamicGridComponent } from '../dynamic-grid/dynamic-grid.component';
import { USERS_COLUMNS, USERS_DATA } from '../model.ts/user-data';
import { UsersServiceService } from '../service/users-service.service';
import { Router } from '@angular/router';
import { UserSummaryList } from '../interface/user.interface';
import { TableComponent } from '../reusable/table/table.component';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    DynamicGridComponent,
    TableComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {


  columns=USERS_COLUMNS;
  data=USERS_DATA;

  constructor( private userService:UsersServiceService, private router:Router){}

  onContextAction(event: { type: string; row: UserSummaryList }) {
    this.userService.setSummary(event.row, event.type);
    this.router.navigate(['/users/view']);
  }
}
