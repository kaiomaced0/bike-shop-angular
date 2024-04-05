import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPneusComponent } from './list-pneus.component';

describe('ListPneusComponent', () => {
  let component: ListPneusComponent;
  let fixture: ComponentFixture<ListPneusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPneusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPneusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
