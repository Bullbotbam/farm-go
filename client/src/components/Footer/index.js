import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	Typography,
	Box,
} from '@mui/material';
import { styled, alpha, createTheme } from '@mui/material/styles';
import { orange } from '@material-ui/core/colors';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MapIcon from '@mui/icons-material/Map';

const theme = createTheme({
	palette: {
		primary: {
			main: orange[500],
		},
		secondary: {
			main: '#ed7649',
		},
	},
});

function Footer(theme) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				style={{
					display: 'flex',
					justifyContent: 'center',
					backgroundColor: '#ed7649',
					alignContent: 'space-between',
					padding: '0',
					margin: '0',
				}}
			>
				<Container maxWidth="xl">
					<Toolbar>
						<IconButton
							className="icon-btn"
							aria-label="GitHub.com"
							onClick={() => window.open('https://twitter.com/fmcorg?lang=en')}
						>
							<TwitterIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="button"
							onClick={() => window.open('https://twitter.com/fmcorg?lang=en')}
						>
							Thanks to USDA
						</Typography>
						<IconButton
							className="icon-btn"
							aria-label="GitHub.com"
							onClick={() => window.open('https://github.com/mariamv29')}
						>
							<GitHubIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="button"
							onClick={() => window.open('https://github.com/mariamv29')}
						>
							Maria Mireles
						</Typography>
						<IconButton
							className="icon-btn"
							aria-label="GitHub.com"
							onClick={() => window.open('https://github.com/RiveraDenisse')}
						>
							<GitHubIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="button"
							onClick={() => window.open('https://github.com/RiveraDenisse')}
						>
							Denisse Rivera
						</Typography>
						<br />
						<Typography variant="body1" color="inherit">
							<span role="img" aria-label="leaf">
								🌿
							</span>
							<Typography variant="button"> ©2021 FarmGo Market </Typography>
							<span role="img" aria-label="leaf">
								🌿
							</span>
						</Typography>
						<br />
						<IconButton
							className="icon-btn"
							aria-label="GitHub.com"
							onClick={() => window.open('https://github.com/chasemcquown')}
						>
							<GitHubIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="button"
							onClick={() => window.open('https://github.com/chasemcquown')}
						>
							Chase McQuown
						</Typography>

						<IconButton
							className="icon-btn"
							aria-label="GitHub.com"
							onClick={() => window.open('https://github.com/Bullbotbam')}
						>
							<GitHubIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="button"
							onClick={() => window.open('https://github.com/Bullbotbam')}
						>
							Donald Bull
						</Typography>
						<IconButton
							className="icon-btn"
							aria-label="GitHub.com"
							onClick={() => window.open('https://developers.google.com/maps')}
						>
							<MapIcon fontSize="large" />
						</IconButton>
						<Typography
							variant="button"
							onClick={() => window.open('https://developers.google.com/maps')}
						>
							Thanks to Google Maps
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

export default Footer;
