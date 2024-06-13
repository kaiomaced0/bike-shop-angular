import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTelefonesComponent } from './new-telefones.component';

describe('NewTelefonesComponent', () => {
  let component: NewTelefonesComponent;
  let fixture: ComponentFixture<NewTelefonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTelefonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTelefonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
