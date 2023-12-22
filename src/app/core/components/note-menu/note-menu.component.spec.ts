import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteMenuComponent } from './note-menu.component';

describe('NoteMenuComponent', () => {
  let component: NoteMenuComponent;
  let fixture: ComponentFixture<NoteMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteMenuComponent]
    });
    fixture = TestBed.createComponent(NoteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
