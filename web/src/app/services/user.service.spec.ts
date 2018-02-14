import { UserService } from './user.service';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from './auth.service';


class AngularFirestoreCollectionStub {
  doc(id) {
    return new AngularFirestoreDocument(null);
  }
}

class AngularFirestoreStub {
  conversationCollection: any;
  collection(name) {
    this.conversationCollection = new AngularFirestoreCollection(null, null);
    return this.conversationCollection;
  }
}

fdescribe('UserService', () => {
  let userService: UserService;
  let afs: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: AngularFirestore, useClass: AngularFirestoreStub }
      ]
    });

    afs = TestBed.get(AngularFirestore);
    userService = TestBed.get(UserService);
  });

  it('should create an instance', () => {
    expect(userService).toBeDefined();
  });


  xit('should get a single user by Id', () => {
    const result = userService.getUserById('abcd');
    expect(result).toBeTruthy();
    // spyOn(authService, 'getCurrentUserId');
    // windowService.createChildWindow(1);
    // expect(authService.getCurrentUserId).toHaveBeenCalled();
  });

  it('should get all Users', () => {
    const result = userService.getAllUsers();
    expect(result).toBeTruthy();
    // spyOn(authService, 'getCurrentUserId');
    // windowService.createChildWindow(1);
    // expect(authService.getCurrentUserId).toHaveBeenCalled();
  });

  xit('should add a user if it doesnt exists', () => {
    const result = userService.addUserIfNotExisting('abcdef');
    expect(result).toBeTruthy();
    // spyOn(authService, 'getCurrentUserId');
    // windowService.createChildWindow(1);
    // expect(authService.getCurrentUserId).toHaveBeenCalled();
  });
});
