import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

export interface postData {
  title: string;
  body: string;
  userId:number,
  image:string,
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post_data!: postData; 
  comments:any
  
  constructor(private activeRouter: ActivatedRoute ,private postService : PostServiceService){}

  ngOnInit(){
    this.activeRouter.params.subscribe((res : any) => {
      this.post_details(res['id'])
    })
  }

  post_details(id:number){

    // details
    this.postService.singlePost(id).subscribe((res :any) => {
      console.log(res)
      this.post_data = res
      this.post_data.image = `https://dummyimage.com/400x300/cccccc/fff.png&text=image${id}`

    })

    // commetns
    this.postService.user_comments(id).subscribe((res :any) => {
      console.log(res)
      this.comments = res
    })
    
  }


}
