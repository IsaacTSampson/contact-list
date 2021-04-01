import '../../_assets/CSS/Contacts.css';

import { useViewport } from '../../_misc/useViewport';
import { getRandomColour } from '../../_misc/functions';
import { USER_API } from '../../_misc/constants';
import ContactListDesktop from '../Desktop/ContactListDesktop/ContactListDesktop';
import ContactListMobile from '../Mobile/ContactListMobile/ContactListMobile';

import { ContactsOutlined } from '@ant-design/icons';
import { Spin, Input } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';





const ContactList = () => {
    const { width } = useViewport();
    const [contactList, setContactList] = useState([]);
    const [contactListFilter, setContactListFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const breakpoint = 900;





    const filterNames = e => {
        let currentValue = e.target.value;
        const updateState = contactListFilter.filter(contact => {
            const value = currentValue.toLowerCase();
            const valLength = value.length;
            const contactName = contact.name.toLowerCase();
            const contactSub = contactName.substring(0, valLength);

            return contactSub === value;
        });
        
        setContactList(updateState);
    }






    useEffect(() => {
        setLoading(true);

        axios.get(USER_API)
        .then(res => {
            for(let i = 0; i < res.data.length; i++) res.data[i].colour = getRandomColour();
            res.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            setLoading(false);
            setContactList(res.data);
            setContactListFilter(res.data);
        })
        .catch(err => {
            setLoading(false);
            setError(true);
            console.log(err);
        });
    }, []);





    
    return(
        <div>
            <div id="header">
                <div style = {{paddingLeft: '4%', color: 'white', fontSize:'40px'}}>{<ContactsOutlined />} Contacts</div>
            </div>
            <div>
                <Input style={{height: '45px'}} onChange={filterNames} placeholder="Search Contacts"></Input>
            </div>
            {
                loading ? <div style={{textAlign: 'center'}}><Spin size='large' tip='loading...'/></div> 
                : error ? <div style={{textAlign: 'center', color: '#F25F5C'}}>Oops! Issue loading page. Please try refreshing.</div>
                : width < breakpoint ? <ContactListMobile contactList={contactList}/> 
                : <ContactListDesktop contactList={contactList}/> 
            } 
        </div>
    ) 
}

export default ContactList;