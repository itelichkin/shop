import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  objectName: string;

  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { name: string }) {
  }

  ngOnInit() {
    this.objectName = this.data.name;
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  toRemoveObject() {
    this.dialogRef.close(true);
  }

}
