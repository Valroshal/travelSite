import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInCitiesComponent } from './place-in-cities.component';

describe('PlaceInCitiesComponent', () => {
  let component: PlaceInCitiesComponent;
  let fixture: ComponentFixture<PlaceInCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceInCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceInCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
