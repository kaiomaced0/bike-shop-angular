import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFreioComponent } from './view-freio.component';

describe('ViewFreioComponent', () => {
  let component: ViewFreioComponent;
  let fixture: ComponentFixture<ViewFreioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFreioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFreioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
