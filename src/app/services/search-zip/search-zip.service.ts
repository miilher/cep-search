import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adress } from '../../interface/iadress';

@Injectable({
  providedIn: 'root'
})
export class SearchZipService {

  baseURL = 'https://viacep.com.br/ws/';
  constructor(private http: HttpClient) {}

  getAdressPerZipCode(zipCode){
    return this.http.get<Adress>(this.baseURL + zipCode + '/json/');
  }

}
