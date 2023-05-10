import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {OffreServiceService} from '../../../services/offre-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {Book} from '../../../model/book';
import {BookService} from '../../../services/book.service';
  interface type {
    value: string;
    viewValue: string;
  }
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookForm: FormGroup;
  book:Book
  file:any
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
              public dialogRef: MatDialogRef<AddbookComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,private toastr: ToastrService) {}

  ngOnInit(): void {

    this.book = new Book()
    this. createform()
  }


  createform(){
    this.bookForm = this.fb.group({
      title: [''],
      description:[''],
      categories:[''],
      nbrpage:[''],
      publish_date:[''],
      langueBook:['']
    })
  }

  public onFileChanged(event: any) {
    const reclamation = new FormData()
    reclamation
    let reader = new FileReader();
    let file = event.target.files[0];
    const formData = new FormData();
    if (event.target.files && event.target.files[0]) {
      formData.append("file", file);
      this.file =formData
    }
  }


  createBook(){
    this.book.title = this.bookForm.get('title').value
    this.book.description = this.bookForm.get('description').value
    this.book.categories = this.bookForm.get('categories').value
    this.book.nbrpage = this.bookForm.get('nbrpage').value
    this.book.langueBook = this.bookForm.get('langueBook').value
    this.book.publish_date = this.bookForm.get('publish_date').value
    console.log(this.book)
    this.bookService.addBook(this.book).subscribe(res=>{

      this.bookService.uplodeFile(this.file,res.idbook).subscribe(res=>{

        this.dialogRef.close()
      })
    })
      this.toastr.success('Request Ajoutee', 'Success!');
      //this.dialogRef.close();
  }

}
