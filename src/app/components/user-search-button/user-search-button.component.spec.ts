import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchButtonComponent } from './user-search-button.component';

describe('UserListComponent', () => {
  let component: UserSearchButtonComponent;
  let fixture: ComponentFixture<UserSearchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
