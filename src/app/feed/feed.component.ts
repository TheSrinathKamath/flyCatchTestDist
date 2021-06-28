import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FeedService } from '../api/feed.service';
import { Feed } from '../models/feed.models';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public subscription = new Subscription();
  feed: Feed[] = [];
  err: any;
  isDataLoaded: boolean = false;
  hasAPIFailed: boolean = false;

  constructor(private router: Router, private _feed: FeedService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getFeeds();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getFeeds() {
    this.subscription.add(
      this._feed.getFeed().subscribe(res => {
        this.feed = res;
        this.isDataLoaded = true;
      },
        err => { this.isDataLoaded = true; this.hasAPIFailed = true; this.snackBar.open(`${err?.message}`, 'OK'); })
    );
  }

  goToPost(id: number) {
    this.router.navigate(['/posts', id])
  }
}
