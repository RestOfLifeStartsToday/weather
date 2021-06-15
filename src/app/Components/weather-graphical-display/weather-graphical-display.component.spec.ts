import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGraphicalDisplayComponent } from './weather-graphical-display.component';

describe('WeatherGraphicalDisplayComponent', () => {
  let component: WeatherGraphicalDisplayComponent;
  let fixture: ComponentFixture<WeatherGraphicalDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGraphicalDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGraphicalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
