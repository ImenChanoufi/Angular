import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:9080';
  constructor(private http: HttpClient) { }
  addBook(book : Book): Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}/Book/add`, book);
  }
  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/Book/all`);
  }
  deleteBook(id:any){
    return this.http.delete(`${this.baseUrl}/Book/delete/`+id)
  }
  updateBook(book : Book,id:any){
    return this.http.put(`${this.baseUrl}/Book/update/`+id,book)
  }
  approuveBook(id:any){
    return this.http.get(`${this.baseUrl}/Book/approuve/`+id)
  }
  NotApprouveBook(id:any){
    return this.http.get(`${this.baseUrl}/Book/NotApprouve/`+id)
  }
  getApprouveBook(){
    return this.http.get(`${this.baseUrl}/Book/allApprouved`)
  }
  getNotApprouveBook(){
    return this.http.get(`${this.baseUrl}/Book/allNotApprouved`)
  }
  getAllallOnHoldBook(){
    return this.http.get(`${this.baseUrl}/Book/allOnHold`)
  }

  uplodeFile(file: any,id:any){
    return this.http.post(`${this.baseUrl}/Book/file/`+id,file)
  }
  rateBook(score:any,id:any){
    return this.http.get(`${this.baseUrl}/Book/rate/`+score+"/"+id)
  }

}
