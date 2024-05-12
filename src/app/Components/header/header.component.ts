import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchId!: string;

  constructor(private userService: UserService, private router: Router) { }

  searchUsers() {
    if (!this.searchId) return;

    const userId = parseInt(this.searchId);
    if (!isNaN(userId)) {
      this.userService.searchUsersById(userId)
        .subscribe({
          next:(response: any)=>{
            if (response.data) {
              this.router.navigate(['/user', userId]);
            } else {
             console.log("user not found");
            }
          },
          error:(err)=>{
           console.log(err);
          }
        }
         
        );
    }
  }
}
