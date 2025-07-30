import { Routes } from '@angular/router';
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolessummaryviewComponent } from './roles/rolessummaryview/rolessummaryview.component';
import { UserssummaryviewComponent } from './users/userssummaryview/userssummaryview.component';
import { MydataComponent } from './mydata/mydata.component';

export const routes: Routes = [
    {
        path:'',
        component:DashboardComponent
    },
    {
        path:'users',
        component:UsersComponent
    },
    {
        path:'users/view',
        component:UserssummaryviewComponent
    },
    {
        path:'roles',
        component:RolesComponent
    },
    {
        path:'roles/view',
        component:RolessummaryviewComponent,
    },
    {
        path:'dynamicGrid',
        component: DynamicGridComponent,
    },
    {
        path:'mydata',
        component:MydataComponent   
    }
];
