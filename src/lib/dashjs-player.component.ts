import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MediaPlayer, MediaPlayerClass} from 'dashjs';

@Component({
  selector: 'dashjs-player',
  templateUrl: './dashjs-player.component.html',
  styleUrls: ['./dashjs-player.component.css']
})
export class DashjsPlayerComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @Input() autoload: boolean = true;
  @Input() src: string;

  public player: MediaPlayerClass;

  constructor() { }

  ngOnInit() {
    this.player = MediaPlayer().create();
    this.player.initialize(this.videoPlayer.nativeElement, this.src, this.autoload);
  }

}
