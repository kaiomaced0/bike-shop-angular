import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFreioComponent } from './new-freio.component';

describe('NewFreioComponent', () => {
  let component: NewFreioComponent;
  let fixture: ComponentFixture<NewFreioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFreioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFreioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
