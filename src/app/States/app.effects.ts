
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../Services/user.service';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './app.actions';

@Injectable()
export class AppEffects {
    currentPage:number = 1;
  constructor(private actions$: Actions, private userService: UserService) {}
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
   switchMap(() => this.userService.getUsers(this.currentPage).pipe(
      map(users => loadUsersSuccess({ users })),
      catchError(error => of(loadUsersFailure({ error })))
    ))
  ));

}
