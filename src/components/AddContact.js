import React , {useState,useEffect} from 'react';

const AddContact = (props) =>  {
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');

	const add = (e) => {
		e.preventDefault();
		if (name == '' || email == '') {
			alert('All fields must be filled');
			return ;
		}
		props.addcontact({name,email})
	};
	const changename = (e) => {
		e.preventDefault();
		setName(e.target.value)
	}
	const changeemail = (e) => {
		e.preventDefault();
		setEmail(e.target.value)
	}


		return(
			<div className='ui main'>
				<h2>Add Contact</h2>
				<form className='ui form' onSubmit={add} >
				<div className='field'>
					<label>Name</label>
					<input type='text' name='name'  value={name} onChange={changename} />
				</div>
				<div className='field'>
					<label>Email</label>
					<input type='text' name='email' placeholder="Email" onChange={changeemail} />
				</div>
				<button className='ui button green'>Submit</button>
			<	/form>
			</div>
		)
}

export default AddContact;



