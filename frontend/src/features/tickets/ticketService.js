import axios from 'axios';

const API_URL = '/api/tickets';

// Create new ticket
const createTicket = async (ticketData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post(API_URL, ticketData, config);

	return response.data;
};

// Get user tickets
const getTickets = async token => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(API_URL, config);

	return response.data;
};

// Get single ticket
const getTicket = async (ticketId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(`${API_URL}/${ticketId}`, config);

	// console.log(response.data);

	return response.data;
};

const ticketService = {
	createTicket,
	getTickets,
	getTicket,
};

export default ticketService;
