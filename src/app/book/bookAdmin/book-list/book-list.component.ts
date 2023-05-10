import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {ConfirmationComponent} from '../../../confirmation/confirmation.component';
import {UpdateRequestComponent} from '../../../Request/update-request/update-request.component';
import {AddRequestComponent} from '../../../Request/add-request/add-request.component';
import {OffreServiceService} from '../../../services/offre-service.service';
import {AddbookComponent} from '../addbook/addbook.component';
import {BookService} from '../../../services/book.service';
import {UpdateBookComponent} from '../update-book/update-book.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  displayedColumns: string[] = [ 'title','description','Date','category','langue','isPublic','nbrPage', 'actions'];
  dataSource :any
  constructor(private bookService :BookService,public dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  this.getAll()
  }

  getAll(){
    this.bookService.getApprouveBook().subscribe(res=>{
      this.dataSource=res
      console.log(res)
    })
  }
  delete(element: any) {
    let dialogRef =  this.dialog.open(ConfirmationComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
    this.bookService.deleteBook(element.idbook).subscribe(res=>{
      console.log('done');
      this.getAll()
    })
      }
      else console.log('nope');
    });
  }

  edit(element :any){
    let dialogRef =  this.dialog.open(UpdateBookComponent,{
      width :'700px',
      height :'800px',
      data:element
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getAll()
    });
    console.log(element)
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
  approuve(element :any){
    this.bookService.approuveBook(element.idbook).subscribe(res=>{
      this.getAll()
    })
    console.log(element)
  }

}
