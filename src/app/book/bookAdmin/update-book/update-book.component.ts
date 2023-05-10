import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Book} from '../../../model/book';
import {BookService} from '../../../services/book.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
interface type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  bookForm: FormGroup;
  book:Book
  pendingStatus:any
  disable:boolean=false
  id:any
  asma :string = "asma"
  categories: type[] = [
    {value: 'Romance', viewValue: 'Romance'},
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'fiction', viewValue: 'Fiction'},
    {value: 'adventure', viewValue: 'adventure'},
  ];
  langueBook: type[] = [
    {value: 'FRENCH', viewValue: 'FRENCH'},
    {value: 'ARABIC', viewValue: 'ARABIC'},
    {value: 'ENGLISH', viewValue: 'ENGLISH'},
  ];
  constructor(private fb: FormBuilder , private bookService :BookService,
              public dialogRef: MatDialogRef<UpdateBookComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService) {}

  ngOnInit(): void {

    this.book = new Book()
    this. createform()
  }


  createform(){
    this.bookForm = this.fb.group({
      title: [this.data.title],
      description:[this.data.description],
      categories:[this.data.categories],
      nbrpage:[this.data.nbrpage],
      publish_date:[this.data.publish_date],
      langueBook:[this.data.langueBook]
    })
  }

  updateBook(){
    this.book.title = this.bookForm.get('title').value
    this.book.description = this.bookForm.get('description').value
    this.book.categories = this.bookForm.get('categories').value
    this.book.nbrpage = this.bookForm.get('nbrpage').value
    this.book.langueBook = this.bookForm.get('langueBook').value
    this.book.publish_date = this.bookForm.get('publish_date').value
    console.log(this.book)
    this.bookService.updateBook(this.book , this.data.idbook).subscribe(res=>{
      console.log(res)
    })
    this.toastr.success('book updated', 'Success!');
    this.dialogRef.close();
  }


}
