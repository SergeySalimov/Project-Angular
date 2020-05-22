import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<Users[]> {
  //   return this.http.post<Users[]>(environment.getUserDataUrl + environment.apiKey, );
  // }

}
