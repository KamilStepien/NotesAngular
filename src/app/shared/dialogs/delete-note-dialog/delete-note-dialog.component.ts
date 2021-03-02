import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteModel } from '../../models/note.model';
import { NoteService } from '../../note.service';

export interface DialogData
{
  note:NoteModel
}


@Component({
  selector: 'app-delete-note-dialog',
  templateUrl: './delete-note-dialog.component.html',
  styleUrls: ['./delete-note-dialog.component.scss']
})

export class DeleteNoteDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DeleteNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteService: NoteService) {}

    onYesClick(): void {
      this.noteService.delete(this.data.note)
      this.dialogRef.close();
  }

}
