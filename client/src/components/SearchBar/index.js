import * as React from 'react';
import { styled, alpha, createTheme } from '@mui/material/styles';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Menu,
	MenuItem,
	Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { orange } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
// import SignUp from '../SingUp';

const theme = createTheme({
	palette: {
		primary: {
			main: orange[500],
		},
		secondary: {
			main: '#ffac33',
		},
	},
});

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const MenuOptions = [
	'Home',
	'SignUp',
	'Login',
	'FarmerGo Markets',
	'Farm Fresh Products',
	'Order History',
	'Log Out',
];

export default function SearchBar() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const SignUp = () => {
		setAnchorEl('/signup');
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" style={{ backgroundColor: '#ed764a' }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						{MenuOptions.map((option) => (
							<MenuItem
								key={option}
								selected={option === 'Growers'}
								onClick={handleClose}
							>
								{option}
							</MenuItem>
						))}
					</Menu>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						<Link
							to="/"
							style={{
								fontFamily: 'fantasy',
								fontSize: '2rem',
								textDecoration: 'none',
								padding: '0.25rem 1rem',
								borderRadius: '.5rem',
								border: 'none',
								outline: 'none',
								cursor: 'pointer',
								margin: '0 1px',
								color: '#fff',
							}}
						>
							FarmGo Market
							<span role="img" aria-label="leaf">
								🌿
							</span>
						</Link>
					</Typography>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
