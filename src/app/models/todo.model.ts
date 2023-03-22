
export class Todo {

    title: string;
    id:number;
    description: string;
    isDone:boolean;

    constructor(id:number, title:string, description:string, isDone:boolean){
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
    }

}