import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../services/book.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSort} from '@angular/material/sort';
import {ConfirmationComponent} from '../../confirmation/confirmation.component';
import {UpdateBookComponent} from '../bookAdmin/update-book/update-book.component';
import {AddbookComponent} from '../bookAdmin/addbook/addbook.component';

@Component({
  selector: 'app-on-hold-list',
  templateUrl: './on-hold-list.component.html',
  styleUrls: ['./on-hold-list.component.css']
})
export class OnHoldListComponent implements OnInit {



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
    this.bookService.getAllallOnHoldBook().subscribe(res=>{
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
  NotApprouveBook(element :any){
    this.bookService.NotApprouveBook(element.idbook).subscribe(res=>{
      this.getAll()
    })
    console.log(element)
  }
}
