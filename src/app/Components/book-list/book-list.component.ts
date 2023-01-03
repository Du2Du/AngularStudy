import { Component } from '@angular/core';
import { books } from 'src/app/services/books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books = books;

  constructor() {}
}
