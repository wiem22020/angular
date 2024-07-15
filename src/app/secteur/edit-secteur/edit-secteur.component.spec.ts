import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecteurComponent } from './edit-secteur.component';

describe('EditSecteurComponent', () => {
  let component: EditSecteurComponent;
  let fixture: ComponentFixture<EditSecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSecteurComponent]
    });
    fixture = TestBed.createComponent(EditSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
