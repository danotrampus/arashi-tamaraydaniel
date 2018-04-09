import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
