import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

import { NoteModel } from 'src/app/shared/models/note.model';

@Component({
  selector: 'app-note-list-element',
  templateUrl: './note-list-element.component.html',
  styleUrls: ['./note-list-element.component.scss']
})
export class NoteListElementComponent {

  @Input() noteInput!: NoteModel; 
  @Output() chceckedEvent = new EventEmitter<NoteModel>();
  @Output() deleteNoteEvent = new EventEmitter<NoteModel>();



  setChecked():void
  {
    this.noteInput.checked = !this.noteInput.checked;
    this.chceckedEvent.emit(this.noteInput)
  }

  deleteNote():void
  {
    this.deleteNoteEvent.emit(this.noteInput);
  }

}
