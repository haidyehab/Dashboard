import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../../Interfaces/user';
import { Observable } from 'rxjs';
import { LoadingService } from '../../Services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  pageSize:number = 10;
  currentPage:number = 1;
  totalUsers:number = 0;
  loading: boolean = false;
  loading$!: Observable<boolean>;
  constructor(private _userService:UserService,private router: Router, private dataService: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.dataService.getLoadingState();
    this.loadUsers();
    this.loadUsersData();

    this.loadData();
  }

  loadUsersData() {
    this.loading = true;
    this.dataService.getData(this.currentPage)
      .subscribe({
        next:(response: any)=>{
          this.users = response.data;
          console.log(this.users);
          this.totalUsers = response.total;
          console.log(this.totalUsers+"haidy");
        },
        error:(err)=>{
          console.log(err);
          this.loading = false;
        }
      })
      
  }


  loadUsers() {
    this.loading = true;
    this._userService.getUsers(this.currentPage)
      .subscribe({
        next:(response: any)=>{
          this.users = response.data;
          console.log(this.users);
          this.totalUsers = response.total;
          console.log(this.totalUsers);
        },
        error:(err)=>{
          console.log(err);
          this.loading = false;
        }
      })
      
  }

  loadData() {
    this.dataService.fetchData().subscribe({
      next:(response: any)=>{
        this.users = response.data;
        console.log(this.users);
        this.totalUsers = response.total;
        console.log(this.totalUsers+"haidy");
      },
      error:(err)=>{
        console.log(err);
        this.loading = false;
      }
    })
  }


  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  totalPages(): number {
    return Math.ceil(this.totalUsers / this.pageSize);
  }


  userDetails(userId: number) {
    this.router.navigate(['/user', userId]);
  }

}
