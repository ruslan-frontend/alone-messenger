import { useRef } from 'react';
import './MessageInput.scss';

function MessageInput( { setMessages, messages } ) {

	const inputRef = useRef();

	return (
		<form className="inputField"
		onSubmit={(e) => {
			e.preventDefault();
			setMessages([...messages, {text: inputRef.current.value}])
			inputRef.current.value = '';
		}}>
			<img className='inputField__download' src="/images/download.svg" alt="" />
			<input 
			ref={inputRef}
			className='inputField__input' 
			type="text" 
			placeholder='Message in #general'
			/>
		</form>
	);
}

export default MessageInput;