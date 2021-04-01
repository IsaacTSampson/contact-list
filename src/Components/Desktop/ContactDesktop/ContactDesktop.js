
import GoogleMap from '../../GoogleMap/GoogleMap';

import { Menu, Dropdown, Avatar } from 'antd';
import { useState } from 'react';






const ContactDesktop = props => {
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

    const personalMenu = (
        <Menu>
            <Menu.Item>
                <b>Username: </b> {contact.username}
            </Menu.Item>
            <Menu.Item>
                <b>Email: </b> {contact.email}
            </Menu.Item>
            <Menu.Item>
                <b>Website: </b> {contact.website}
            </Menu.Item>
        </Menu>
    );

    const companyMenu = (
        <Menu>
            <Menu.Item>
                <b>Company Name: </b> {contact.company.name}
            </Menu.Item>

            <Menu.Item>
                <b>Catch Phrase: </b> {contact.company.catchPhrase}
            </Menu.Item>
            <Menu.Item>
                <b>BS: </b> {contact.company.bs}
            </Menu.Item>
        </Menu>
    );

    const addressMenu = (
        <Menu>
            <Menu.Item>
                <b>Street Name: </b> {contact.address.street}
            </Menu.Item>
            <Menu.Item>
                <b>Suite: </b> {contact.address.suite}
            </Menu.Item>
            <Menu.Item>
                <b>City: </b> {contact.address.city}
            </Menu.Item>
            <Menu.Item>
                <b>Zipcode: </b> {contact.address.zipcode}
            </Menu.Item>
            <Menu.Item >
                <div>
                    <GoogleMap {...googleMapProps}/>
                </div>    
            </Menu.Item>
        </Menu>
    );






    return(
        <div >
            <table style={{width:"100%", textAlign: "center", tableLayout: "fixed"}}>
                <tbody>
                    <tr id={hoverRowID}>
                        <td>
                            <div id='wrapper'>
                                <div id="flexbox">
                                    <div>
                                        <Avatar 
                                            style={{backgroundColor: `#${contact.colour}`, fontWeight: 'bold'}} 
                                            size={50}
                                        >
                                            {contact.name[0]}
                                        </Avatar>
                                    </div>
                                    <div id="common" style={{paddingLeft: "5%", fontWeight: 'bold'}}>
                                        {contact.name}
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td>
                            <div>
                                <div id='wrapper'>
                                    <div style ={{justifyContent: 'space-between'}} id="flexbox">
                                        <Dropdown overlay={personalMenu} placement="bottomCenter">
                                            <div id="common">Personal</div>
                                        </Dropdown>
                                        <Dropdown overlay={companyMenu} placement="bottomCenter">
                                            <div id="common">Company</div>
                                        </Dropdown>
                                        <Dropdown 
                                            overlay={addressMenu} 
                                            placement="bottomCenter"
                                            visible={mapVisible} 
                                            title="Map" 
                                            onVisibleChange={ flag => { setVisible(flag) }}
                                        >
                                            <div id="common">Address</div>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div id="wrapper">
                                <div id="common"  style={{textAlign: 'right'}}>
                                    {contact.phone}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>               
        </div>
    );
}

export default ContactDesktop;