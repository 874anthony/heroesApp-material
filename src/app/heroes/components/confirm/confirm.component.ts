import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [],
})
export class ConfirmComponent implements OnInit {
  constructor(
    private _matDialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  delete(): void {
    this._matDialogRef.close(true);
  }
  close(): void {
    this._matDialogRef.close();
  }
}
