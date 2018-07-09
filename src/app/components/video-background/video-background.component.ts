import { Component, ViewEncapsulation, Input, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare let $: any;

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoBackgroundComponent implements OnInit, AfterViewInit {
  @Input('youtubeVideoId') youtubeVideoId: string;
  private player: any;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initVideo();
  }

  videoUrl(): string {
    return `http://www.youtube.com/watch?v=${this.youtubeVideoId}`;
  }

  initVideo() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      console.log('Youtube ready');
      this.player = new (<any>window).YT.Player('tv', {
        height: '100%',
        width: '100%',
        events: {
          'onReady': () => {
            console.log('Youtube ok');
            this.player.loadVideoById({ 'videoId': this.youtubeVideoId });
            this.player.mute();
          },
          'onStateChange': (e) => {
            if (e.data === 1) {
              $('#tv').addClass('active');
              $('.mbr-background-video-preview').css({ opacity: 0 });
            } else if (e.data === 0) {
              $('#tv').removeClass('active');
              $('.mbr-background-video-preview').css({ opacity: 1 });
              this.player.loadVideoById({ 'videoId': this.youtubeVideoId });
            }
          }
        },
        playerVars: {
          autoplay: 1,
          autohide: 1,
          modestbranding: 0,
          rel: 0,
          showinfo: 0,
          controls: 0,
          disablekb: 1,
          enablejsapi: 0,
          iv_load_policy: 3
        }
      });
    };

    const tag = document.createElement('script');
    tag.type = 'text/javascript';
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    const videoBackground = $('#video-background');
    // tslint:disable-next-line:max-line-length
    const parsedUrl = this.videoUrl().match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);

    const $img = $('<div class="mbr-background-video-preview">')
      .hide()
      .css({
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      });
    $('> *:eq(0)', videoBackground).before($img);

    if (parsedUrl && /youtube/g.test(parsedUrl[3])) {
      let previewURL = 'http' + ('https:' === location.protocol ? 's' : '') + ':';
      previewURL += '//img.youtube.com/vi/' + parsedUrl[6] + '/maxresdefault.jpg';

      $('<img>').on('load', function () {
        if (120 === (this.naturalWidth || this.width)) {
          // selection of preview in the best quality
          const file = this.src.split('/').pop();

          switch (file) {
            case 'maxresdefault.jpg':
              this.src = this.src.replace(file, 'sddefault.jpg');
              break;
            case 'sddefault.jpg':
              this.src = this.src.replace(file, 'hqdefault.jpg');
              break;
          }
        } else {
          $img.css('background-image', 'url("' + this.src + '")')
            .show();
        }
      }).attr('src', previewURL);
    }

    $(window).on('load resize', () => {
      if (this.player) {
        const w = $(window).width() + 200,
          h = $(window).height() + 200,
          offset = 300;
        if (w / h > 16 / 9) {
          this.player.setSize(w, h);
          $('.tv .screen').css({ 'left': '0px' });
        } else {
          this.player.setSize(h / 9 * 16, h);
          $('.tv .screen').css({ 'left': -($('.tv .screen').outerWidth() - w + offset) / 2 });
        }
      }
    });
  }

}
