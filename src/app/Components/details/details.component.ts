import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
 
  userId!: number;
  user: any;
  constructor(private route: ActivatedRoute, 
    private _userService: UserService ,private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
      this.userDetails(this.userId);
    });
  }

  userDetails(userId: number) {
    this._userService.getUserById(userId)
      .subscribe((response: any) => {
        this.user = response.data;
      });
  }

  backToList() {
    this.router.navigate(['/users']);
  }


}
