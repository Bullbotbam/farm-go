import React, { useEffect } from 'react';
import CartItem from '../components/CartItem/cartIndex';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { Button } from '@mui/material';
// import Auth from "../utils/auth";
import { useStoreContext } from '../utils/GlobalState';
// import { useParams } from "react-router";
// import { useQuery } from "@apollo/client";
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.success.main,
		color: theme.palette.common.white,
		fontSize: 25,
		fontFamily: 'Gabriela , serif',
	},

	[`&.${tableCellClasses.body}`]: {
		fontSize: 20,
		fontFamily: 'Gabriela , serif',
	},
}));

const Cart = () => {
	const [checkout, { data }] = useLazyQuery(QUERY_CHECKOUT);
	const [state, dispatch] = useStoreContext();

	useEffect(() => {
		ast;
	});

	function total() {
		let sum = 0;
		state.cart.forEach((item) => {
			sum += item.price * item.purchaseQuantity;
		});
		return sum.toFixed;
	}
	//   if (loading) {
	//     return <div>hello</div>;
	//   }

	return (
		<React.Fragment>
			<h2 style={{ fontSize: '50px' }}>{customer.firstName}'s Cart</h2>

			{state.cart.length ? (
				<TableContainer className="table">
					{state.cart.map((item) => (
						<CartItem key={item._id} item={item} />
					))}
					<div className="summary" style={{ width: '25%' }}>
						<TableHead style={{ width: '70%' }}>
							<StyledTableCell>Order Summary</StyledTableCell>
						</TableHead>
						<TableBody>
							<StyledTableCell>Total: ${total()}</StyledTableCell>
						</TableBody>

						<Button
							variant="contained"
							color="success"
							style={{
								margin: '5%',
								alignSelf: 'center',
								display: 'grid',
							}}
						>
							Checkout
						</Button>
					</div>
				</TableContainer>
			) : (
				<h3>
					<span role="img" aria-label="shocked">
						😱
					</span>
					You haven't added anything to your cart yet!
				</h3>
			)}
		</React.Fragment>
	);
};
export default Cart;
