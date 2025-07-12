interface Persons {
  name: string;
}
interface Contact {
  phone: string;
}
type PersonDetail = Persons & Contact;
let objj: PersonDetail = {
  name: 'jack',
  phone: '133',
};
