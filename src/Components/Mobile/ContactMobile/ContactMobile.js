import  GoogleMap  from '../../GoogleMap/GoogleMap'

import { useState } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';


const ContactMobile = props => {
    const contact = props.contact;
    const hoverRowID = `idrow${contact.colour}`;
    const [mapVisible, setVisible] = useState(false);

    const googleMapProps = {
        lat: parseFloat(contact.address.geo.lat),
        lng: parseFloat(contact.address.geo.lng),
        size: '300px',
        userLetter: contact.name[0],
        markerColour: `#${contact.colour}`
    }

    const menu = (
        <Menu onClick={e => {
            if(e.key !== "12") setVisible(false);
        }}>
            <Menu.Item key="1">
                <b style={{fontSize:"20px"}}>{contact.phone}</b> 
            </Menu.Item>

            <Menu.Item key="2">
                <b>Username: </b> {contact.username}
            </Menu.Item>
            <Menu.Item key="3">
                <b>Email: </b> {contact.email}
            </Menu.Item>
            <Menu.Item key="4">
                <b>Website: </b> {contact.website}
            </Menu.Item>
            <Menu.Item key="5">
                <b>Company Name: </b> {contact.company.name}
            </Menu.Item>
            <Menu.Item key="6">
                <b>Catch Phrase: </b> {contact.company.catchPhrase}
            </Menu.Item>
            <Menu.Item key="7">
                <b>BS: </b> {contact.company.bs}
            </Menu.Item>
            <Menu.Item key="8">
                <b>Street Name: </b> {contact.address.street}
            </Menu.Item>
            <Menu.Item key="9">
                <b>Suite: </b> {contact.address.suite}
            </Menu.Item>
            <Menu.Item key="10">
                <b>City: </b> {contact.address.city}
            </Menu.Item>
            <Menu.Item key="11">
                <b>Zipcode: </b> {contact.address.zipcode}
            </Menu.Item>
            <Menu.Item key="12">
                <div>
                    <GoogleMap {...googleMapProps}/>
                </div>    
            </Menu.Item>
        </Menu>
    );






    return(
        <div id={hoverRowID}>    
            <div id='wrapper'>
                <div id="flexbox">
                    <div>
                        <Avatar style={{backgroundColor: `#${contact.colour}`, fontWeight: 'bold'}} size={50}>{contact.name[0]}</Avatar>
                    </div>
                    <Dropdown 
                        overlay={menu} 
                        placement="topRight"
                        visible={mapVisible} 
                        title="Map" 
                        onVisibleChange={ flag => { setVisible(flag) }}
                    >
                        <div id="common" style={{paddingLeft: "10%", fontWeight: 'bold'}} >
                            {contact.name}
                        </div>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default ContactMobile;