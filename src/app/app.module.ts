import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule
} from '@angular/core';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { HomeComponent } from './home';
import { HeaderComponent } from './common/header';
import { BreadcrumbsComponent } from './common/breadcrumbs';
import { ToolBoxComponent } from './common/toolBox';
import { FooterComponent } from './common/footer';
import { LogoComponent } from './common/logo';
import { SearchComponent } from './common/search';
import { LoginComponent } from './login';
import { LoginLinksComponent } from './login';
import { CoursesComponent } from './courses';
import { CourseDetailesComponent } from './courses/courseDetailes';
import { CourseService } from './courses';
import { LoginService } from './login';
import { HighlightDirective } from './common/highlight';
import { FormatDurationPipe } from './common/formatDuration';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
    ToolBoxComponent,
    BreadcrumbsComponent,
    HomeComponent,
    LoginComponent,
    LoginLinksComponent,
    CoursesComponent,
    CourseDetailesComponent,
    HighlightDirective,
    FormatDurationPipe
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS,
    CourseService,
    LoginService,
  ]
})
export class AppModule {
}
