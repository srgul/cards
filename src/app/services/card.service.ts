import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!: Card[];

  constructor(
    @Inject('apiUrl') private api:string,
    private http: HttpClient
  ) { }

  apiUrl:string = "";

  getCards():void {
    this.http.get<Card[]>(this.api + "/cards").subscribe((res:Card[]) => {
      this.cards = res
    })
  }

  updateCard(card:Card, cardId: number):Observable<any> {
    return this.http.put("https://demo.limantech.com/cards/public/api/cards/"+ cardId , card)
  }

  addCard(card:Card[]){
    return this.http.post("https://demo.limantech.com/cards/public/api/cards", card)
  }

  deleteCard(cardId:number):Observable<any>{
    return this.http.delete("https://demo.limantech.com/cards/public/api/cards/"+ cardId)
  }
}
 