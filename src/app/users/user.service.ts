import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private http = inject(HttpClient);

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}