import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTextDisplayComponent } from './weather-text-display.component';

describe('WeatherTextDisplayComponent', () => {
  let component: WeatherTextDisplayComponent;
  let fixture: ComponentFixture<WeatherTextDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTextDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
