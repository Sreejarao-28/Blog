import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id?:number;
  title:any;
  content:any;
 constructor(private postservice: PostService, private route: ActivatedRoute,private router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe((parameters)=>this.postservice.getPost(parameters['id']).subscribe((retrievedPost)=>{this.title=retrievedPost.title,this.content=retrievedPost.content, this.id=retrievedPost.id;}));
  }

  onSubmit(){
    const updatedpost = {
      id:this.id,
      title: this.title,
      content: this.content
    }
    this.postservice.editPost(updatedpost).subscribe(() => this.router.navigate(['/blog']));
}
}
