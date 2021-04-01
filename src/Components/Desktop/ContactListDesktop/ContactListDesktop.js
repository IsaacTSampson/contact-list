import ContactDesktop from '../ContactDesktop/ContactDesktop';

const ContactListDesktop = props => {
    const contactList = props.contactList;

    const contacts = contactList.map(c => {
        return <ContactDesktop key={c.id} contact={c} />
    });
    
    return <div>{contacts}</div>
}

export default ContactListDesktop;