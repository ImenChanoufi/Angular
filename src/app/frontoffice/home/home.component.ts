import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {OffreServiceService} from '../../services/offre-service.service';
import {BookService} from '../../services/book.service';
import {AddbookComponent} from '../../book/bookAdmin/addbook/addbook.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:any
  image:any
  starRating = 0;
  currentRate = 3.14;
  constructor(private bookService :BookService,private router:Router,public dialog: MatDialog) { }

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
    this.bookService.getApprouveBook().subscribe(res=>{
      this.books=res
      for (let i = 0; i < this.books.length; i++){
        this.books[i].image= "data:image/png;base64,"+ this.books[i].attachment.data
      }
    })

  }
  details(book:any){
    this.router.navigate(["details",book.idbook]);
  }
  rate(book:any){
    this.bookService.rateBook(book.rate,book.idbook).subscribe(res=>{
      console.log(res)
    })
    console.log(book)
  }

}
