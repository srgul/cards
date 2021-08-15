import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private fb: FormBuilder,
    private cardService:CardService
    ) { }

  cardForm!:FormGroup;

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: ["", [Validators.maxLength(50)]],
      title: ["", [Validators.required, Validators.maxLength(255)]],
      phone: ["", [Validators.required, Validators.maxLength(20)]],
      email: ["", [Validators.email ,Validators.maxLength(50)]],
      address: ["", Validators.maxLength(255)]
    })
  }

  addCards():void {
    console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value).subscribe((res:any) => {
      this._snackBar.open(res || "Kart başarılı bir şekilde eklendi", "", {
        duration: 4000
      });
      this.dialogRef.close()
    })
  }

}
