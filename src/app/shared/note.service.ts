import { Injectable } from '@angular/core';
import { NoteModel } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public notesTab: Array<NoteModel> = [new NoteModel(1,"kamil", true),new NoteModel(2,"kamil111", false)];
  private lastId = this.notesTab[this.notesTab.length -1 ].id
  constructor() { }

  setChecked(id:number,checked:boolean):void
  {
   this.notesTab.find(elm => elm.id == id)!.checked = checked 
   console.log(this.notesTab);
  }

  addNote(name:string):void
  {
    this.notesTab.push(new NoteModel(++this.lastId, name, false));
    console.log(this.notesTab);
  }

  delete(note:NoteModel):void
  {
    this.notesTab = this.notesTab.filter(item => item !== note);
  }

}