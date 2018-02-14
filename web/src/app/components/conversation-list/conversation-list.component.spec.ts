import { ConversationListComponent } from './conversation-list.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ConversationService } from '../../services/conversation.service';
import { Router } from '@angular/router';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';
import { UserSearchButtonComponent } from '../user-search-button/user-search-button.component';
import { DemoMaterialModule } from '../../demo-material/demo-material.module';

class ConversationServiceStub {
  conversationCollection: any;
  getConversationsForUser() {
    this.conversationCollection = {};
    return this.conversationCollection.snapshotChanges();
  }
}

class RouterStub {
  navigate(url: string) { return url; }
}

describe('ConversationListComponent', () => {
  let component: ConversationListComponent;
  let fixture: ComponentFixture<ConversationListComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationListComponent, UserSearchButtonComponent],
      imports: [
        DemoMaterialModule
      ],
      providers: [
        { provide: ConversationService, useClass: ConversationServiceStub },
        { provide: Router, useClass: RouterStub }
      ]
    });
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to conversation', () => {
    spyOn(router, 'navigate');
    component.selectConversation(1);
    expect(router.navigate).toHaveBeenCalled();
  });
});
