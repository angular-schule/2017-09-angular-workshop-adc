import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {

    // TODO: sort on button click!
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
      new Book('111', 'AngularJS', 'Einführung in das Framework', 4)
    ];
  }

  reorderBooks(book: Book) {
    console.log('Rated book:', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
