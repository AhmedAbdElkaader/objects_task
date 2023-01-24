import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  post_list:any = []

  constructor(private postService : PostServiceService ){}

  ngOnInit(){
    this.get_all_posts()
  }

  get_all_posts(){
    this.postService.all_posts().subscribe((res :any) => {
      console.log(res)
      this.post_list = res
      this.post_list.forEach((element :any ,index: any) => {
        element.image = `https://dummyimage.com/400x300/cccccc/fff.png&text=image${element.id}`
      });
    })
  }

  

}
