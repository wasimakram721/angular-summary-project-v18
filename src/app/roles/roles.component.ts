import { Component } from '@angular/core';
import { DynamicGridComponent } from '../dynamic-grid/dynamic-grid.component';
import { ROLES_COLUMNS, ROLES_DATA } from '../model.ts/role-data';
import { RolesServiceService } from '../service/roles-service.service';
import { Router } from '@angular/router';
import { RolesSummaryList } from '../interface/roles.interface';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [
    DynamicGridComponent
  ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {

  columns=ROLES_COLUMNS;
  data=ROLES_DATA;

  constructor(
    private rolesService:RolesServiceService,
    private router:Router
  ){}
onContextAction(event: { type: string; row: RolesSummaryList }) {
  this.rolesService.setSummary(event.row, event.type);
  this.router.navigate(['/roles/view']);
}
}
