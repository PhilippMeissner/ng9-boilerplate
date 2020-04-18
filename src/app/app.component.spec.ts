import {async, TestBed} from '@angular/core/testing';
import {MatButtonModule} from '@angular/material/button';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

        BrowserModule,
        AppRoutingModule,

        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        BrowserAnimationsModule,

        MatButtonModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng9-boilerplate'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng9-boilerplate');
  });
});
