import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServices {

    todos: Todo[] = [
        {
            id: 1,
            title: "Maitriser angular",
            description: "Je vais y arriver",
            isDone:false
        },
        {
            id: 2,
            title: "Dormir tot les soirs",
            description: "Impossible tant que j'ai TikTok",
            isDone:true
        },
        {
            id: 3,
            title: "Reussir ma TodoList avec angular",
            description: "J'essaie actuellement",
            isDone:false
        }
    ]




}