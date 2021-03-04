import { Injectable } from '@angular/core';

import { NoteModel } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public notesTab: Array<NoteModel> = [new NoteModel(1,"kamil", true),new NoteModel(2,"kamil111", false)];
  private lastId = 2;

  
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

  deleteAllChecked():void
  {
    this.notesTab = this.notesTab.filter(item => item.checked != true);
  }

  public IsAnyChecked():boolean 
  {
    for(let i = 0; i < this.notesTab.length -1; i++)
    {
      if(this.notesTab[i].checked === true)
      return true;
    }
    return false;
  }
}
