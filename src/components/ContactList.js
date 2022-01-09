import React from 'react';
import CardContact from './ContactCard';

const ContactList = (props) =>{
	console.log(props);
	const deleteContact = (id) => {
		props.getDeleteid(id);
	}
	const renderContactList = props.contacts.map((contact) => {
		return(
			<CardContact contact={contact} clickHandler={deleteContact}/>
		)
	})
	return(
		<>
		<div className='ui celled list'>{renderContactList} </div>
		{/*<div>{renderContactList}</div>*/}
		</>
	)
}

export default ContactList;