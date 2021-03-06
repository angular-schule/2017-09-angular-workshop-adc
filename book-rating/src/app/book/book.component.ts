import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  rateUp() {
    this.book.rateUp();
    console.log(1);
    this.rated.emit(this.book);
    console.log(3);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  rateDownDisabled() {
    return !this.book.rateDownAllowed;
  }

  rateUpDisabled() {
    return !this.book.rateUpAllowed;
  }
}
