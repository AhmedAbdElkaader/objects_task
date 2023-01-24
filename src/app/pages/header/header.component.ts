import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog , private route : Router){}

  add_post(){
    const post_dilog = this.dialog.open(AddPostComponent,{
      width:"40%",
    });

    post_dilog.afterClosed().subscribe((result :any) => {
      console.log(result)
      if(result){
        this.route.navigateByUrl('/home')
      }else {
        return
      }
    });
  }
}
