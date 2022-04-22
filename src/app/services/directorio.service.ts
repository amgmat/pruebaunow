import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../interface/user.interface';
@Injectable({
  providedIn: 'root'
})
export class DirectorioService {

  public urlBase = 'https://apimocha.com/directoriounow';

  constructor(private http:HttpClient) {

   }

   getDirectorio(){
     return this.http.get<User[]>(`${this.urlBase}/directorio`)
   }
}
