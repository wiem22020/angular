import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactureComponent } from './list-facture.component';

describe('ListFactureComponent', () => {
  let component: ListFactureComponent;
  let fixture: ComponentFixture<ListFactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFactureComponent]
    });
    fixture = TestBed.createComponent(ListFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
