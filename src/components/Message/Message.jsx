import './Message.scss';

function Message( { text } ) {
	return (
		<div className="message">
			<img className='message__avatar' src="/images/no-avatar.png" alt="" />
			<div>
				<div className="message__info">
					<h3 className="message__info-name">Ruslan Bulatov</h3>
					<span className="message__info-date">6:38 PM</span>
				</div>
				<div className="message__value">
					<p className="message__value-paragraph">{text}</p>
				</div>
			</div>
		</div>
	);
}

export default Message;