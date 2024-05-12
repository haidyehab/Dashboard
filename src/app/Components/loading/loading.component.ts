import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoadingService } from '../../Services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
 
  // @Input() isLoading: boolean = false;
  @Input() isLoading$!: Observable<boolean>;
}