import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { DynamicGridComponent } from '../../dynamic-grid/dynamic-grid.component';
import { UsersServiceService } from '../../service/users-service.service';
import { USERS_COLUMNS } from '../../model.ts/user-data';
import { Router } from '@angular/router';
import { TableComponent } from '../../reusable/table/table.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  name:boolean= true;
    selectedFile!: File | null;
  filePreview: string | ArrayBuffer | null = null;
  fileType: 'image' | 'pdf' | null = null;


  // array :string[] = ['Location', 'Code', 'Action'];

  constructor(private usersservice:UsersServiceService, private router : Router, private http:HttpClient){}

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
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (!this.selectedFile) return;

    const fileType = this.selectedFile.type;
    this.fileType = fileType.includes('pdf') ? 'pdf' : 'image';

    const reader = new FileReader();
    reader.onload = () => this.filePreview = reader.result;
    reader.readAsDataURL(this.selectedFile);
  }

  uploadFile() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:8080/api/upload', formData)
      .subscribe({
        next: res => alert('File uploaded successfully'),
        error: err => alert('Upload failed: ' + err.message)
      });
  }

}
