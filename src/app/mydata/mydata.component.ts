import { Component } from '@angular/core';
import { TableComponent } from '../reusable/table/table.component';

@Component({
  selector: 'app-mydata',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './mydata.component.html',
  styleUrl: './mydata.component.scss'
})
export class MydataComponent {

}
