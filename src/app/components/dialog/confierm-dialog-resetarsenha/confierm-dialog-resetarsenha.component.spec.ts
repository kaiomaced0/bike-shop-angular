import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiermDialogResetarsenhaComponent } from './confierm-dialog-resetarsenha.component';

describe('ConfiermDialogResetarsenhaComponent', () => {
  let component: ConfiermDialogResetarsenhaComponent;
  let fixture: ComponentFixture<ConfiermDialogResetarsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiermDialogResetarsenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiermDialogResetarsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
