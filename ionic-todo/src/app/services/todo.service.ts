import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly STORAGE_KEY = 'ionic_todos';
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.todosSubject.asObservable();

  constructor() {
    this.loadTodos();
  }

  private loadTodos(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      const todos = stored ? JSON.parse(stored) : [];
      this.todosSubject.next(todos);
    } catch (error) {
      console.error('Error loading todos:', error);
      this.todosSubject.next([]);
    }
  }

  private saveTodos(todos: Todo[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
      this.todosSubject.next(todos);
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  }

  addTodo(title: string, description?: string): void {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    const currentTodos = this.todosSubject.value;
    this.saveTodos([newTodo, ...currentTodos]);
  }

  updateTodo(id: string, updates: Partial<Todo>): void {
    const currentTodos = this.todosSubject.value;
    const updatedTodos = currentTodos.map((todo) =>
      todo.id === id ? { ...todo, ...updates } : todo
    );
    this.saveTodos(updatedTodos);
  }

  deleteTodo(id: string): void {
    const currentTodos = this.todosSubject.value;
    const filteredTodos = currentTodos.filter((todo) => todo.id !== id);
    this.saveTodos(filteredTodos);
  }

  toggleTodo(id: string): void {
    const currentTodos = this.todosSubject.value;
    const updatedTodos = currentTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveTodos(updatedTodos);
  }

  getTodos(): Todo[] {
    return this.todosSubject.value;
  }

  clearCompleted(): void {
    const currentTodos = this.todosSubject.value;
    const filteredTodos = currentTodos.filter((todo) => !todo.completed);
    this.saveTodos(filteredTodos);
  }
}
