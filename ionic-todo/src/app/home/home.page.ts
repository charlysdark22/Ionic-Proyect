import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../services/todo.service';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  todos$: Observable<Todo[]>;
  newTodoTitle: string = '';
  newTodoDescription: string = '';

  constructor(
    private todoService: TodoService,
    private alertController: AlertController
  ) {
    this.todos$ = this.todoService.todos$;
  }

  ngOnInit(): void {
    // Cargar todos al iniciar
    this.todos$ = this.todoService.todos$;
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle, this.newTodoDescription);
      this.newTodoTitle = '';
      this.newTodoDescription = '';
    }
  }

  toggleTodo(id: string): void {
    this.todoService.toggleTodo(id);
  }

  async deleteTodo(id: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Eliminar tarea',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.todoService.deleteTodo(id);
          },
        },
      ],
    });
    await alert.present();
  }

  clearCompleted(): void {
    this.todoService.clearCompleted();
  }

  getCompletedCount(): number {
    return this.todoService.getTodos().filter((t) => t.completed).length;
  }

  getTotalCount(): number {
    return this.todoService.getTodos().length;
  }
}
