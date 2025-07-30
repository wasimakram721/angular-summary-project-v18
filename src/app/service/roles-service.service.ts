import { Injectable, signal } from '@angular/core';
import { RolesSummaryList } from '../interface/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesServiceService {
  
  rolesSummaryRowInfo = signal({} as RolesSummaryList);
  rolesSummaryAction = signal('');

  setSummary(row: RolesSummaryList, action: string) {
    this.rolesSummaryRowInfo.set(row);
    this.rolesSummaryAction.set(action);
  }
   clear() {
    this.rolesSummaryRowInfo.set({} as RolesSummaryList);
    this.rolesSummaryAction.set('');
  }
}
