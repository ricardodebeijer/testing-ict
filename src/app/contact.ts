export class Contact {
    id: string
    firstname: string
    lastname: string
    public fullname() {
        return this.firstname + ' ' + this.lastname
    }
    username: string
    email:string
}
