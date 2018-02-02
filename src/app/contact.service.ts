import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Contact } from './contact';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  myContactsCollection: AngularFirestoreCollection<any>;
  myContacts: Observable<any[]>;
  private contactDoc: AngularFirestoreDocument<Contact>;
  constructor(private afs: AngularFirestore) {
    this.myContactsCollection = this.afs.collection('md-contact-list')
    this.myContacts = this.myContactsCollection.valueChanges()
  }

  getContactById(id) {
    let contact = this.afs.collection('md-contact-list').doc<Contact>(id)
    return contact
  }

  getContactList() {
    return this.afs.collection('md-contact-list').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
  }

  generateContactList() {
    for (var _i = 0; _i < this.limit; _i++) {
      let temp = new Contact()
      temp.firstname = this.getFirstName();
      temp.lastname = this.getLastName();
      temp.username = this.getUserName(temp);
      temp.email = this.getEmail(temp);
      this.myContactsCollection.add({
        firstname: temp.firstname,
        lastname: temp.lastname,
        username: temp.username,
        email: temp.email,
        profilepic: 'https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=ricardo.de.beijer@ict.nl&UA=0&size=HR64x64&sc=1517481366349'
      })
    }
  }


  // Generating test data
  private limit = 10;
  private firstnames = [
    'Ricardo',
    'Bas',
    'Bart',
    'Victor',
    'Daan	',
    'Noah',
    'Sem',
    'Lucas',
    'Jesse',
    'Finn',
    'Milan',
    'Max',
    'Levi',
    'Luuk',
    'Bram',
    'Mees',
    'Liam',
    'Thijs',
    'Adam',
    'Sam',
    'Thomas',
    'Ruben',
    'Julian',
    'Lars',
    'Benjamin',
    'Teun',
    'Noud',
    'Mats',
    'Tim']
  private lastnames = [
    'de Beijer',
    'van den Heuvel',
    'Jansen',
    'de Wit',
    'Bakker',
    'Blom',
    'Boer',
    'Bos ',
    'Bosch ',
    'Bosman',
    'Brouwer',
    'Dekker',
    'Dijkstra',
    'Driessen',
    'Evers ',
    'Gerritsen',
    'Groen ',
    'Hendriks',
    'Hermans',
    'Hoekstra',
    'Hofman',
    'Huisman',
    'Jacobs',
    'Jansen',
    'Janssen',
    'Jonker',
    'Kok ',
    'Koning',
    'Koster',
    'Kramer',
    'Kuijpers',
    'Kuiper',
    'Kuipers',
    'Maas',
    'Martens',
    'Meijer',
    'Meyer ',
    'Mol ',
    'Molenaar',
    'Mulder',
    'Peeters',
    'Peters',
    'Post',
    'Postma',
    'Prins ',
    'Sanders',
    'Schipper',
    'Scholten',
    'Schouten',
    'Smeets',
    'Smit',
    'Smits ',
    'Timmermans ',
    'Veenstra',
    'Verbeek',
    'Verhoeven',
    'Vermeulen',
    'Vink',
    'de Ruiter',
    'Visser',
    'Vos ',
    'Willems',
    'Willemsen',
    'Wolters',
    'de Boer',
    'de Bruijn',
    'Bruyn ',
    'de Bruin',
    'de Graaf',
    'de Groot',
    'de Haan',
    'de Jong',
    'de Jonge',
    'de Koning',
    'de Lange',
    'de Leeuw',
    'de Vos',
    'de Vries',
    'de Wit',
    'van Beek',
    'van Dam',
    'van Dijk',
    'van Dongen ',
    'van Doorn',
    'van Leeuwen',
    'van Loon',
    'van Veen',
    'van Vliet',
    'van Wijk',
    'van de',
    'den Brink',
    'van de Berg',
    'den Berg',
    'der Berg',
    'van de Pol ',
    'den Pol',
    'der Pol',
    'van de',
    'den Velde',
    'der Velde',
    'van de Velden',
    'den Velden ',
    'der Velden ',
    'van de Veen',
    'der Veen',
    'van de Ven ',
    'der Ven',
    'van de Wal ',
    'der Wal',
    'van den Bosch',
    'van den Broek',
    'van den Heuvel ',
    'van der Heijden',
    'Heyden',
    'van der Horst',
    'van der Laan ',
    'van der Linden ',
    'van der Meer ',
    'van der Meulen '
  ]
  private emails = ['ict.nl', 'gmail.com', 'hotmail.com']

  private getFirstName() {
    return this.firstnames[this.randomIntFromInterval(0, this.firstnames.length - 1)]
  }
  private getLastName() {
    return this.lastnames[this.randomIntFromInterval(0, this.lastnames.length - 1)]
  }


  private getUserName(item: Contact) {
    let name = item.fullname();
    return name.toLowerCase().replace(/\s/g, "")
  }

  private getEmail(item: Contact) {
    let email = item.username + '@' + this.emails[this.randomIntFromInterval(0, this.emails.length - 1)]
    return email
  }

  private randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
