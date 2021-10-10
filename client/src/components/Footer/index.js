import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import PhoneIcon from '@mui/icons-material/Phone';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import AgricultureIcon from '@mui/icons-material/Agriculture';

function Footer() {
	return (
		<AppBar position="static" color="primary">
			<Container
				maxWidth="md"
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Toolbar>
					<Typography variant="body1" color="inherit">
						<span>🌿</span> ©2021 FarmGo Market <span>🌿</span>
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Footer;
