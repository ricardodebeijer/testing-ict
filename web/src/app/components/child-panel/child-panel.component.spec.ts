import { ChildPanelComponent } from './child-panel.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DevUserComponent } from '../dev-user/dev-user.component';
import { ConversationPanelComponent } from '../conversation-panel/conversation-panel.component';
import { WindowService } from '../../services/window.service';
import { MemberListComponent } from '../member-list/member-list.component';
import { MemberAddComponent } from '../member-add/member-add.component';
import { DemoMaterialModule } from '../../demo-material/demo-material.module';
import { FormsModule } from '@angular/forms';
import { ConversationInfoComponent } from '../conversation-info/conversation-info.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ConversationService } from '../../services/conversation.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/observable';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';

class WindowServiceStub {
  getNativeWindow() {
    return { name: 'testing,name' };
  }
}

class ActivatedRouteStub {
  params = new Observable(observer => {
    observer.next({ id: '1234' });
    observer.complete();
  });
}

class ConversationServiceStub {
  conversationCollection: any;
  conversation: any;
  getConversationsForUser() {
    this.conversationCollection = {};
    return this.conversationCollection.snapshotChanges();
  }
  getConversationById(id) {
    this.conversation = new AngularFirestoreDocument(null);
    return this.conversation;
  }
}

class UserServiceStub {
  conversationCollection: any;
}

class AuthServiceStub {
  user: any;
  getCurrentUser() {
    this.user = new AngularFirestoreDocument(null);
    return this.user;
  }
}

class RouterStub {
  navigate(url: string) { return url; }
}


describe('ConversationListComponent', () => {
  let component: ChildPanelComponent;
  let fixture: ComponentFixture<ChildPanelComponent>;
  let windowService: WindowService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChildPanelComponent,
        DevUserComponent,
        ConversationInfoComponent,
        ConversationPanelComponent,
        MemberListComponent,
        MemberAddComponent,
        MessageListComponent,
        MessageInputComponent,
        FileUploadComponent,
      ],
      imports: [
        DemoMaterialModule,
        FormsModule
      ],
      providers: [
        { provide: WindowService, useClass: WindowServiceStub },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: ConversationService, useClass: ConversationServiceStub },
        { provide: UserService, useClass: UserServiceStub },
        { provide: AuthService, useClass: AuthServiceStub },
      ]
    });
    windowService = TestBed.get(WindowService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPanelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
