import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostServiceService } from 'src/app/services/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit  {

  post_data: FormGroup | any;
  formStatus = false
  constructor(public dialogRef: MatDialogRef<AddPostComponent> ,
    private _snackBar: MatSnackBar,
     private postService : PostServiceService){}


  ngOnInit(){
    this.initForm()
  }

  initForm(){
    this.post_data = new FormGroup({
      title: new FormControl("", [Validators.required]),
      body: new FormControl("", [Validators.required])
    })
  }

  submitForm(){
    console.log(this.post_data.value)
    if(!this.post_data.valid){
      this.formStatus = true
    }else {
      this.formStatus = false
      const post_form = this.post_data.value
      this.postService.add_post(post_form).subscribe((res :any) => {
        console.log(res)
        this.dialogRef.close(post_form)
        this.openSnackBar("post added successfully","X")
      })
    }
  }

  openSnackBar(message: string,action:string) {
    this._snackBar.open(message, action, {
       duration: 3000,
    });
  }  
}
