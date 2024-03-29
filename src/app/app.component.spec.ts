import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`counter should be greater than 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.counter).toEqual(0);
  });
  it(`counter should reset to 0 after increment`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.Increment();
    app.Reset();
    expect(app.counter).toEqual(0);
  });
  it(`counter should be equal to 1`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.Increment();
    expect(app.counter).toEqual(1);
  });
  it(`counter should be equal  2`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.Increment();
    app.ByTwo();
    expect(app.counter).toEqual(2);
  });
});
