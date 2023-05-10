import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Book, Request} from '../../model/Offre';
import {OffreServiceService} from '../../services/offre-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {



  offreForm: FormGroup;
  request:Request
  pendingStatus:any
  id:any

  constructor(private fb: FormBuilder , private bookService :BookService, private toastr: ToastrService,
              public dialogRef: MatDialogRef<UpdateRequestComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) {}

  ngOnInit(): void {
    this.request = new Request()
    this. createform()
    console.log("data",this.data)

  }


  createform(){
    this.offreForm = this.fb.group({
      name: [this.data.name],
      expirationDate:[this.data.expirationDate],
      creationDate:[this.data.creationDate],
      description:[this.data.description],
      type:[this.data.type],
      stateRequest:[this.data.stateRequest],
      budget:[this.data.budget]
    })
  }

  updateEvent(){
    this.request.name = this.offreForm.get('name').value
    this.request.description = this.offreForm.get('description').value
    this.request.expirationDate = this.offreForm.get('expirationDate').value
    this.request.creationDate = this.offreForm.get('creationDate').value
    this.request.type = this.offreForm.get('type').value
    this.request.budget = this.offreForm.get('budget').value




  }


}
