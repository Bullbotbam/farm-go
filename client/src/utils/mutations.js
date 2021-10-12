import { gql } from '@apollo/client';

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			customer {
				_id
			}
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder($products: [ID]!) {
		addOrder(products: $products) {
			purchaseDate
			products {
				_id
				name
				description
				price
				quantity
				category {
					title
				}
			}
		}
	}
`;

export const ADD_CUSTOMER = gql`
	mutation addCustomer(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
	) {
		addCustomer(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
		) {
			token
			customer {
				_id
			}
		}
	}
`;
