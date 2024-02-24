import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselDetailComponent } from './carrosel-detail.component';

describe('CarroselDetailComponent', () => {
  let component: CarroselDetailComponent;
  let fixture: ComponentFixture<CarroselDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarroselDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
