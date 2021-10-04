import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoYoutubePageRoutingModule } from './video-youtube-routing.module';

import { VideoYoutubePage } from './video-youtube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoYoutubePageRoutingModule
  ],
  declarations: [VideoYoutubePage]
})
export class VideoYoutubePageModule {}
