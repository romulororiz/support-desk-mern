import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, reset, closeTicket } from '../features/tickets/ticketSlice';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function Ticket() {
	const { ticket, isLoading, isSuccess, isError, message } = useSelector(
		state => state.ticket
	);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { ticketId } = useParams();

	useEffect(() => {
		return () => {
			if (isSuccess) {
				return dispatch(reset());
			}
		};
	}, [dispatch, isSuccess]);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		dispatch(getTicket(ticketId));
	}, [dispatch, isError, message, ticketId]);

	// Close ticket
	const onTicketClose = () => {
		dispatch(closeTicket(ticketId));
		toast.success('Ticket Closed');
		navigate('/tickets');
	};

	if (isLoading) {
		return <Spinner />;
	}

	if (isError) {
		return <h3>Something went wrong</h3>;
	}

	return (
		<div className='ticket-page'>
			<header className='ticket-header'>
				<BackButton url='/tickets' />
				<h2>
					Ticket ID: {ticket._id}
					<span className={`status status-${ticket.status}`}>
						{ticket.status}
					</span>
				</h2>
				<h3>
					Date Submitted: {new Date(ticket.createdAt).toLocaleString('de-CH')}
				</h3>
				<h3>Product: {ticket.product}</h3>
				<hr />
				<div className='ticket-desc'>
					<h3>Description of Issue</h3>
					<p>{ticket.description}</p>
				</div>
			</header>

			{ticket.status !== 'close' && (
				<button onClick={onTicketClose} className='btn btn-block btn-danger'>
					Close Ticket
				</button>
			)}
		</div>
	);
}
export default Ticket;
