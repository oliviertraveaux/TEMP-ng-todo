import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { selectItems } from 'src/app/shared/store/reducers';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  displayedColumns: string[] = ['id', 'title', 'description', 'inCharge'];
  private store = inject(Store);
  public todos$ = this.store.select(selectItems);
  dataSource = this.todos$;
}
