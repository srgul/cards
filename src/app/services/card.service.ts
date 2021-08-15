import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    @Inject('apiUrl') private api:string,
    private http: HttpClient
  ) { }

  apiUrl:string = "";

  getCards():Observable<Card[]> {
    return this.http.get<Card[]>(this.api + "/cards")
  }

  addCard(card:Card[]){
    return this.http.post("https://demo.limantech.com/cards/public/api/cards", card)
  }
}
 