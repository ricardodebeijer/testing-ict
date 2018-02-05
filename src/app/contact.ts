export class Contact {
    id: string;
    firstname: string;
    lastname: string;
    profilePic: string;
    get displayName(): any {
        return this.firstname + ' ' + this.lastname;
    }
}
