export class NoteModel 
{
    id:number;
    name:string;
    checked:boolean;
    constructor(id:number, name:string, chcecked:boolean)
    {
        this.id =id;
        this.name = name;
        this.checked = chcecked;
    }
}