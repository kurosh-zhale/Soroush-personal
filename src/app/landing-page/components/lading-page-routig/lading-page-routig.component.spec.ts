import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingPageRoutigComponent } from './lading-page-routig.component';

describe('LadingPageRoutigComponent', () => {
  let component: LadingPageRoutigComponent;
  let fixture: ComponentFixture<LadingPageRoutigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadingPageRoutigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadingPageRoutigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
