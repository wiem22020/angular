import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTvaComponent } from './edit-tva.component';

describe('EditTvaComponent', () => {
  let component: EditTvaComponent;
  let fixture: ComponentFixture<EditTvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTvaComponent]
    });
    fixture = TestBed.createComponent(EditTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
