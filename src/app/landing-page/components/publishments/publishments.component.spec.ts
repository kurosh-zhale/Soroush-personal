import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishmentsComponent } from './publishments.component';

describe('PublishmentsComponent', () => {
  let component: PublishmentsComponent;
  let fixture: ComponentFixture<PublishmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
