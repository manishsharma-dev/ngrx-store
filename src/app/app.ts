import { Component, inject, signal } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common';
import { userFeature } from './users/user.feature';
import { loadUsers } from './users/user.actions';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   private store = inject(Store);
   users$: Observable<any>;

   constructor() {
      this.users$ = this.store.select(userFeature.selectUsersState);
   }

   load(){
      this.store.dispatch(loadUsers());
   }
}
