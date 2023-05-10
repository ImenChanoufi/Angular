import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {MatDialog} from '@angular/material/dialog';
import {AddbookComponent} from '../../book/bookAdmin/addbook/addbook.component';
import {Book} from '../../model/book';

@Component({
  selector: 'app-home-ecrivain',
  templateUrl: './home-ecrivain.component.html',
  styleUrls: ['./home-ecrivain.component.css']
})
export class HomeEcrivainComponent implements OnInit {
  books:Book[] = []
  starRating = 0;
  currentRate = 3.14;
  constructor(private bookService :BookService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll()
  }
  add(){
    let dialogRef =  this.dialog.open(AddbookComponent,{
      width :'700px',
      height :'700px',
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getAll()
    });
  }
  getAll(){
    this.bookService.getAllBooks().subscribe(res=>{
      this.books=res
      for (let i = 0; i < this.books.length; i++){
        this.books[i].image= "data:image/png;base64,"+ this.books[i].attachment.data
      }
    })
  }

}
