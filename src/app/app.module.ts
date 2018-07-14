import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { VideoBackgroundComponent } from './components/video-background/video-background.component';
import { InvitedComponent } from './components/invited/invited.component';
import { BrideComponent } from './components/bride/bride.component';
import { GroomComponent } from './components/groom/groom.component';
import { MapComponent } from './components/map/map.component';
import { LocataionComponent } from './components/location/location.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { WedshootsComponent } from './components/wedshoots/wedshoots.component';
import { StoryComponent } from './components/story/story.component';
import { GiftComponent } from './components/gift/gift.component';
import { SlideComponent } from './components/slide/slide.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    VideoBackgroundComponent,
    InvitedComponent,
    BrideComponent,
    GroomComponent,
    MapComponent,
    LocataionComponent,
    CountdownComponent,
    CopyrightComponent,
    MenuComponent,
    BannerComponent,
    WedshootsComponent,
    StoryComponent,
    GiftComponent,
    SlideComponent,
    WedshootsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
