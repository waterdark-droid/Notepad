import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePieceComponent } from './note-piece.component';

describe('NotePieceComponent', () => {
  let component: NotePieceComponent;
  let fixture: ComponentFixture<NotePieceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotePieceComponent]
    });
    fixture = TestBed.createComponent(NotePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
