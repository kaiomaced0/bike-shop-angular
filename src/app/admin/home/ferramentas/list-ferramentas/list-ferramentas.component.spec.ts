import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFerramentasComponent } from './list-ferramentas.component';

describe('ListFerramentasComponent', () => {
  let component: ListFerramentasComponent;
  let fixture: ComponentFixture<ListFerramentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFerramentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFerramentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
