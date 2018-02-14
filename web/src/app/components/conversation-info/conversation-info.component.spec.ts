import { ConversationInfoComponent } from './conversation-info.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ConversationService } from '../../services/conversation.service';
import { Router } from '@angular/router';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Conversation } from '../../conversation';
import { DemoMaterialModule } from '../../demo-material/demo-material.module';
import { FormsModule } from '@angular/forms';
import { MemberListComponent } from '../member-list/member-list.component';
import { MemberAddComponent } from '../member-add/member-add.component';


class FirestoreDocumentStub {
  update() {

  }
}

class ConversationServiceStub {
  conversationCollection: any;
  getConversationsForUser() {
    this.conversationCollection = new FirestoreDocumentStub();
    return this.conversationCollection.snapshotChanges();
  }
}

class RouterStub {
  navigate(url: string) { return url; }
}

describe('ConversationListComponent', () => {
  let component: ConversationInfoComponent;
  let fixture: ComponentFixture<ConversationInfoComponent>;
  let conversationService: ConversationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationInfoComponent, MemberListComponent, MemberAddComponent],
      imports: [
        DemoMaterialModule,
        FormsModule
      ],
      providers: [
        { provide: ConversationService, useClass: ConversationServiceStub },
      ]
    });
    conversationService = TestBed.get(ConversationService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationInfoComponent);
    component = fixture.componentInstance;
    component.conversationId = '1';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change name', () => {
    spyOn(component, 'updateName');
    component.updateName('test');
    expect(component.updateName).toHaveBeenCalled();
  });

  it('should call init', () => {
    component.ngOnInit();
  });

  it('should call changes', () => {
    component.ngOnChanges();
  });

  it('should not call updateInfo if same id', () => {
    component.updateInfo();
  });

  it('should call updateInfo if new id', () => {
    component.conversationId = '2';
    component.updateInfo();
  });
});
