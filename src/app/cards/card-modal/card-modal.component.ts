import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Card,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private fb: FormBuilder,
    private cardService:CardService,
    private snacBarService:SnackbarService
    ) { }

  cardForm!:FormGroup;
  showSpinner:boolean = false;

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: [this.data?.name || "", [Validators.maxLength(50)]],
      title: [this.data?.title || "", [Validators.required, Validators.maxLength(255)]],
      phone: [this.data?.phone || "", [Validators.required, Validators.maxLength(20)]],
      email: [this.data?.email || "", [Validators.email ,Validators.maxLength(50)]],
      address: [this.data?.address || "", Validators.maxLength(255)]
    })
  }

  addCards():void {
    this.showSpinner = true;
    this.cardService.addCard(this.cardForm.value).subscribe((res:any) => {
      this.getSuccess(res || "kart başarılı bir şekilde eklendi")
    }, (err:any) => {
      this.getError(err.message || "Ekleme sırasında bir hata oluştu lütfen kontrol ediniz")
    })
  }

  updateCard():void {
    this.showSpinner = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id).subscribe((res:any) => {
      this.getSuccess(res || "kart başarılı bir şekilde güncellendi")
    }, (err:any) => {
      this.getError(err.message || "Güncelleme sırasında bir hata oluştu lütfen kontrol ediniz")
    })
  }

  deleteCard():void {
    this.showSpinner = true;
    this.cardService.deleteCard(this.data.id).subscribe((res:any) => {
      this.getSuccess(res || "kart başarılı bir şekilde silindi")
    }, (err:any) => {
      this.getError(err.message || "Silme sırasında bir hata oluştu lütfen kontrol ediniz")
    })
  }

  getSuccess(message:string):void{
    this.snacBarService.createSnackBar('success' ,message)
    this.cardService.getCards()
    this.showSpinner = false;
    this.dialogRef.close()
  }

  getError(message:string):void {
    this.snacBarService.createSnackBar('error' ,message)
    this.showSpinner = false;
  }
}
