import { Book } from '../book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs'; <-- Verboten!

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {

    return this.http.get<any[]>('https://api.angular.schule/books')
      .map(rawBooks => rawBooks.map(rawBook =>
        new Book(rawBook.isbn, rawBook.title, rawBook.description, rawBook.rating))
      );
  }

}
