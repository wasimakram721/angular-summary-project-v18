import { Injectable, signal } from '@angular/core';
import { UserSummaryList } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  usersSummaryRowInfo= signal({} as UserSummaryList);
  userSummaryAction=signal('');

   setSummary( row:UserSummaryList, action:string){
    this.usersSummaryRowInfo.set(row);
    this.userSummaryAction.set(action);
   }
   clear(){
    this.usersSummaryRowInfo = signal({} as UserSummaryList);
    this.userSummaryAction= signal('');
   }

}
