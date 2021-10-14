import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
	Typography,
	Box,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
// import PhoneIcon from '@mui/icons-material/Phone';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import AgricultureIcon from '@mui/icons-material/Agriculture';

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
// 	alignItems: 'center',
// 	paddingtTop: theme.spacing(1),
// 	paddingtBottom: theme.spacing(5),
// 	// override media queries injected by them.mixins.Toolbar
// 	'@media all': {
// 		minHeight: 128,
// 	},
// }));

function Footer() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="primary">
				<Container
					maxWidth="lg"
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Toolbar>
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
						<Typography
							variant="body1"
							color="inherit"
							style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
						>
							<span
								role="img"
								aria-label="leaf"
								style={{ paddingLeft: '.5rem', paddingRight: '.5rem' }}
							>
								🌿
							</span>
							<Typography variant="button"> ©2021 FarmGo Market </Typography>
							<span
								role="img"
								aria-label="leaf"
								style={{ paddingLeft: '.5rem', paddingRight: '.5rem' }}
							>
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
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}

export default Footer;
