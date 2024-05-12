import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { LoadingService } from './Services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Dashboard';

  loading$: Observable<boolean>; 

  constructor(private dataService: LoadingService) {
   
    // this.loading$ = this.dataService.getLoadingState().pipe(
    //   map((loading: boolean | null) => loading ?? false) 
    // );

    this.loading$ = this.dataService.getLoadingState().pipe(
      filter(loading => loading !== null), 
      map(loading => loading as boolean) 
    )}
  }

