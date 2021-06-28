import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  { path: '', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule), data: { breadcrumb: 'Feeds' } },
  { path: 'posts/:id', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule), data: { breadcrumb: 'Posts' } },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
