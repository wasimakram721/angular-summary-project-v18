import { Component, computed, effect, Signal } from '@angular/core';
import { RolesServiceService } from '../../service/roles-service.service';
import { RolesSummaryList } from '../../interface/roles.interface';
import { ROLES_COLUMNS } from '../../model.ts/role-data';
import { CommonModule } from '@angular/common';
import { DynamicGridComponent } from '../../dynamic-grid/dynamic-grid.component';


@Component({
  selector: 'app-rolessummaryview',
  standalone: true,
  imports: [
    CommonModule,
    DynamicGridComponent
  ],
  templateUrl: './rolessummaryview.component.html',
  styleUrl: './rolessummaryview.component.scss'
})
export class RolessummaryviewComponent {
 

  constructor(private rolesService: RolesServiceService) {}

    role = computed(() => this.rolesService.rolesSummaryRowInfo());
  columns = ROLES_COLUMNS;

  onGridAction(event: { type: string; row: any }) {
    console.log('Action clicked in view screen:', event);
  }
}
