import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, of, throwError } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getData(page: number) {
    this.loadingSubject.next(true); 
    return this.http.get<User[]>('https://reqres.in/api/users')
      .pipe(
        finalize(() => this.loadingSubject.next(false)) 
      );
  }

  getLoadingState() {
    return this.loadingSubject.asObservable();
  }



  fetchData(): Observable<User[]> {
    return this.http.get<User[]>('https://reqres.in/api/users').pipe(
      catchError(error => {
        console.log(error);
        return throwError(error);
      })
    );
  }

}
