import { User } from './user';

export class UserMock {
    private static firstnames = [
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
        'Tim'];
    private static lastnames = [
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
    ];
    private static emails = ['ict.nl', 'gmail.com', 'hotmail.com', 'live.com', 'yahoo.com'];
    private static function = [
        'Graduate',
        'Software Engineer',
        'Test Engineer',
        'Mechanic',
        'Manager',
        'Consultant',
    ];

    public static generateTestUsers(amount: number) {
        const users = [];
        for (let _i = 0; _i < amount; _i++) {
            const temp = new User();
            temp.firstname = this.getRandomFirstName();
            temp.lastname = this.getRandomLastName();
            temp.username = this.getUserName(temp);
            temp.email = this.getRandomEmail(temp);
            temp.function = this.getRandomFunction();
            users.push({
                firstname: temp.firstname,
                lastname: temp.lastname,
                username: temp.username,
                email: temp.email,
                function: temp.function
            });
        }

        return users;
    }

    private static getRandomFirstName() {
        return this.firstnames[this.randomIntFromInterval(0, this.firstnames.length - 1)];
    }
    private static getRandomLastName() {
        return this.lastnames[this.randomIntFromInterval(0, this.lastnames.length - 1)];
    }

    private static getRandomFunction() {
        return this.function[this.randomIntFromInterval(0, this.function.length - 1)];
    }

    private static getUserName(item: User) {
        const name = item.displayName;
        return name.toLowerCase().replace(/\s/g, '');
    }

    private static getRandomEmail(item: User) {
        const email = item.username + '@' + this.emails[this.randomIntFromInterval(0, this.emails.length - 1)];
        return email;
    }

    private static randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
