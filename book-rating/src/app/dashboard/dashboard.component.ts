import { BookStoreService } from '../shared/book-store/book-store.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private store: BookStoreService) { }

  ngOnInit() {

    // this.books = [
    //   new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
    //   new Book('111', 'AngularJS', 'Einführung in das Framework', 4)
    // ];

    this.store.getAll().subscribe((books) => {
      this.books = books;
      this.reorderBooks(null);
    });
  }

  reorderBooks(book: Book) {
    // console.log('Rated book:', book);
    console.log(2);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
