import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
    private cardService:CardService
  ) { }

  cards!:Card[];

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards().subscribe((res:Card[]) => {
      console.log(res)
      this.cards = res
    })
  }

  openAddCardModal():void {
    this.dialog.open(CardModalComponent, {
      width: "400px"
    })

  }

}
