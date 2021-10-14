import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
	query getProducts($category: ID) {
		products(category: $category) {
			_id
			name
			description
			price
			quantity
			image
			category {
				_id
			}
		}
	}
`;

export const QUERY_CHECKOUT = gql`
	query getCheckout($products: [ID]!) {
		checkout(products: $products) {
			session
		}
	}
`;

export const QUERY_ALL_PRODUCTS = gql`
	{
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
`;

export const QUERY_CATEGORIES = gql`
	{
		categories {
			_id
			title
			image
			description
		}
	}
`;

export const QUERY_CUSTOMER = gql`
	{
		customer {
			firstName
			lastName
			email
			orders {
				_id
				purchaseDate
				products {
					_id
					name
					description
					price
					quantity
					image
					category
				}
			}
		}
	}
`;
