
# Dash.js Angular Module

This is a simple module to wrap Dash.js player in an Angular 6 component.

## Usage:

Include the `DashjsPlayerModule` in your Angular module, and use the component as follows.

`<dashjs-player [src]="'https://dash.akamaized.net/envivio/Envivio-dash2/manifest.mpd'"></dashjs-player>
`

The video will play automatically, this can be avoided by setting the `[autoload]`attribute to false.

The component has some methods to expose the *dash player*, this allows event binding or calling any method directly by getting the  `elementRef`, like this:

    // In the component.ts
    @ViewChild('dashPlayer') dashPlayer: DashjsPlayerComponent;
    
    ngOnInit() {
      // On init go to second 12
      let dashJS: MediaPlayerClass = this.dashPlayer.getPlayer();
      dashJS.seek(12);
    }
    
    // In the component HTML
    <dashjs-player #dashPlayer [src]="'https://dash.akamaized.net/envivio/Envivio-dash2/manifest.mpd'"></dashjs-player>
   

### Contributing:

This project is still in a very early stage, any contribution is welcome.
