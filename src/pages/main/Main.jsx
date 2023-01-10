import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import Message from '../../components/Message/Message.jsx';
import MessageInput from '../../components/MessageInput/MessageInput.jsx';
import './Main.scss';

function Main() {

	const LOCKALSTORAGEKEY = 'message';
	const storageMessages = JSON.parse(localStorage.getItem(LOCKALSTORAGEKEY) || '[]');

	const[messages, setMessages] = useState(storageMessages);

	useEffect(() => {
		localStorage.setItem(LOCKALSTORAGEKEY, JSON.stringify(messages))
	}, [messages]);

	return (
		<div className="main">
		<Header/>
		<section className="chat">
			{messages.map(
				({ text }) => 
				<Message
				text={text} 
				/>)}
		</section>

		<MessageInput
		setMessages={setMessages}
		messages={messages} 
		/>
		</div>
	);
}

export default Main;
