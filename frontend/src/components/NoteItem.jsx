import { useSelector } from 'react-redux';

function NoteItem({ note }) {
	const { user } = useSelector(state => state.auth);

	return (
		<div
			className='note'
			style={{
				backgroundColor: note.isStaff ? 'rgba(0,0,0,.7)' : '#fff',
				Color: note.isStaff ? '#fff' : '#000)',
			}}
		>
			<h4>
				Note from {note.Staff ? <span>Staff</span> : <span>{user.name}</span>}
			</h4>
			<p>{note.text}</p>
			<div className='note-date'>
				{new Date(note.createdAt).toLocaleString('de-CH').slice(0, -3)}
			</div>
		</div>
	);
}
export default NoteItem;
