import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentsService } from '../api/comments.service';
import { PostsService } from '../api/posts.service';
import { Comments } from '../models/comments.models';
import { Posts } from '../models/posts.models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  comments: Comments[] = [];
  commentsCount: number = 0;
  post!: Posts;
  isDataLoaded: boolean = false;
  hasAPIFailed: boolean = false;

  public subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _post: PostsService,
    private _comments: CommentsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): any {
    const idFromUrl = this.route.snapshot.params;

    if (!idFromUrl['id']) return this.router.navigate(['/']);
    if (!parseInt(idFromUrl['id'])) return this.router.navigate(['/']);

    this.getPost(idFromUrl['id']);
    this.getComments(idFromUrl['id']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.isDataLoaded = false;
  }

  getPost(id: number) {
    this.subscription.add(
      this._post.getPost(id).subscribe(res => {
        this.post = res;
        this.isDataLoaded = true;
      },
        err => {
          this.snackBar.open(err, 'OK', { duration: 3000 })
        })
    )
  }
  getComments(id: number) {
    this.subscription.add(
      this._comments.getComments(id).subscribe(res => {
        this.comments = res;
        this.commentsCount = res.length || 0;
      },
        err => {
          this.isDataLoaded = true; this.hasAPIFailed = true;
          this.snackBar.open(err, 'OK', { duration: 3000 })
        })
    )
  }
  follow(id: number) {
    this.snackBar.open('Login to follow!', 'OK', { duration: 3000 })
  }
  like() {
    this.snackBar.open('Login to applaud!', 'OK', { duration: 3000 })
  }
  comment() {
    this.snackBar.open('Login to comment!', 'OK', { duration: 3000 })
  }
}
