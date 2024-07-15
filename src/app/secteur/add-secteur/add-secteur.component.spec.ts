import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecteurComponent } from './add-secteur.component';

describe('AddSecteurComponent', () => {
  let component: AddSecteurComponent;
  let fixture: ComponentFixture<AddSecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSecteurComponent]
    });
    fixture = TestBed.createComponent(AddSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
