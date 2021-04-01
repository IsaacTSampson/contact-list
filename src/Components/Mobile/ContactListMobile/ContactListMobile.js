import ContactMobile from '../ContactMobile/ContactMobile';

const ContactListMobile = props => {
    const contactList = props.contactList;

    const contacts = contactList.map(c => {
        return <ContactMobile key={c.id} contact={c} />
    });
    
    return <div>{contacts}</div>
}

export default ContactListMobile;