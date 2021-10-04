import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoYoutubePage } from './video-youtube.page';

const routes: Routes = [
  {
    path: '',
    component: VideoYoutubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoYoutubePageRoutingModule {}
