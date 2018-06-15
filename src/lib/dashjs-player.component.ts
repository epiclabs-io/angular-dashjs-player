import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MediaPlayer, MediaPlayerClass} from 'dashjs';

@Component({
  selector: 'dashjs-player',
  templateUrl: './dashjs-player.component.html',
  styleUrls: ['./dashjs-player.component.css']
})
export class DashjsPlayerComponent implements OnInit, OnDestroy {
  public player: MediaPlayerClass;
  private _src: string;

  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @Input() autoload: boolean = true;
  @Input() set src(value: string) {
    this._src = value;
    if (this.player && this.player.isPaused()) {
      this.play();
    }
  }

  constructor() { }

  ngOnInit() {
    this.player = MediaPlayer().create();
    this.player.initialize(this.videoPlayer.nativeElement, this._src, this.autoload);
  }

  ngOnDestroy() {
    this.player.reset();
  }

  public getPlayer(): MediaPlayerClass {
    return this.player;
  }

  public play(): void {
    this.player.play();
  }

  public pause(): void {
    this.player.pause();
  }

}
