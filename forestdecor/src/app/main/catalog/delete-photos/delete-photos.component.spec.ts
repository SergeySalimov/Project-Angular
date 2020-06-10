import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePhotosComponent } from './delete-photos.component';

describe('DeletePhotosComponent', () => {
  let component: DeletePhotosComponent;
  let fixture: ComponentFixture<DeletePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
