import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  button: {
    justifyContent: 'flex-start',
  },
}));

const socialButton = (ComponentIcon, label, url, size, variant, color) => {
  if (!label) return null;
  return (
    <Tooltip
      title={label}
    >
      <IconButton
        color={color}
        variant={variant}
        size={size}
        component={Link}
        to={url}
      >
        <ComponentIcon />
      </IconButton>
    </Tooltip>
  );
};

const button = (classes, label, url) => {
  if (!label) return null;
  return (
    <Button
      className={classes.button}
      color="default"
      size="small"
      component={Link}
      to={url}
    >
      {label}
    </Button>
  );
};


const Footers9 = ({
  content,
  contentColor,
  contentVariant,
  primaryWidgetTitle,
  primaryWidgetPrimaryButtonLabel,
  primaryWidgetPrimaryButtonUrl,
  primaryWidgetSecondaryButtonLabel,
  primaryWidgetSecondaryButtonUrl,
  primaryWidgetTertiaryButtonLabel,
  primaryWidgetTertiaryButtonUrl,
  primaryWidgetQuaternaryButtonLabel,
  primaryWidgetQuaternaryButtonUrl,
  secondaryWidgetTitle,
  secondaryWidgetPrimaryButtonLabel,
  secondaryWidgetPrimaryButtonUrl,
  secondaryWidgetSecondaryButtonLabel,
  secondaryWidgetSecondaryButtonUrl,
  secondaryWidgetTertiaryButtonLabel,
  secondaryWidgetTertiaryButtonUrl,
  secondaryWidgetQuaternaryButtonLabel,
  secondaryWidgetQuaternaryButtonUrl,
  tertiaryWidgetTitle,
  quaternaryWidgetTitle,
  facebookButtonLabel,
  facebookButtonUrl,
  facebookButtonColor,
  facebookButtonVariant,
  facebookButtonSize,
  twitterButtonLabel,
  twitterButtonUrl,
  twitterButtonColor,
  twitterButtonVariant,
  twitterButtonSize,
  linkedinButtonLabel,
  linkedinButtonUrl,
  linkedinButtonColor,
  linkedinButtonVariant,
  linkedinButtonSize,
  instagramButtonLabel,
  instagramButtonUrl,
  instagramButtonColor,
  instagramButtonVariant,
  instagramButtonSize,
  pinterestButtonLabel,
  pinterestButtonUrl,
  pinterestButtonColor,
  pinterestButtonVariant,
  pinterestButtonSize,
  redditButtonLabel,
  redditButtonUrl,
  redditButtonColor,
  redditButtonVariant,
  redditButtonSize,
  youtubeButtonLabel,
  youtubeButtonUrl,
  youtubeButtonColor,
  youtubeButtonVariant,
  youtubeButtonSize,
  textAlign,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid container item md={3} sm={6} direction="column">
          <Typography variant="h6" paragraph>{primaryWidgetTitle}</Typography>
          {button(
            classes,
            primaryWidgetPrimaryButtonLabel,
            primaryWidgetPrimaryButtonUrl,
          )}
          {button(
            classes,
            primaryWidgetSecondaryButtonLabel,
            primaryWidgetSecondaryButtonUrl,
          )}
          {button(
            classes,
            primaryWidgetTertiaryButtonLabel,
            primaryWidgetTertiaryButtonUrl,
          )}
          {button(
            classes,
            primaryWidgetQuaternaryButtonLabel,
            primaryWidgetQuaternaryButtonUrl,
          )}
        </Grid>
        <Grid container item md={3} sm={6} direction="column">
          <Typography variant="h6" paragraph>{secondaryWidgetTitle}</Typography>
          {button(
            classes,
            secondaryWidgetPrimaryButtonLabel,
            secondaryWidgetPrimaryButtonUrl,
          )}
          {button(
            classes,
            secondaryWidgetSecondaryButtonLabel,
            secondaryWidgetSecondaryButtonUrl,
          )}
          {button(
            classes,
            secondaryWidgetTertiaryButtonLabel,
            secondaryWidgetTertiaryButtonUrl,
          )}
          {button(
            classes,
            secondaryWidgetQuaternaryButtonLabel,
            secondaryWidgetQuaternaryButtonUrl,
          )}
        </Grid>
        <Grid container item md={3} sm={6} direction="column">
          <Typography variant="h6" paragraph>{tertiaryWidgetTitle}</Typography>
          <Typography
            color={contentColor}
            variant={contentVariant}
            paragraph
          >
            {content}
          </Typography>
        </Grid>
        <Grid container item md={3} sm={6} direction="column">
          <Typography variant="h6" paragraph>{quaternaryWidgetTitle}</Typography>
          <div>
            {socialButton(
              FacebookIcon,
              facebookButtonLabel,
              facebookButtonUrl,
              facebookButtonSize,
              facebookButtonVariant,
              facebookButtonColor,
            )}
            {socialButton(
              TwitterIcon,
              twitterButtonLabel,
              twitterButtonUrl,
              twitterButtonSize,
              twitterButtonVariant,
              twitterButtonColor,
            )}
            {socialButton(
              InstagramIcon,
              instagramButtonLabel,
              instagramButtonUrl,
              instagramButtonSize,
              instagramButtonVariant,
              instagramButtonColor,
            )}
            {socialButton(
              PinterestIcon,
              pinterestButtonLabel,
              pinterestButtonUrl,
              pinterestButtonSize,
              pinterestButtonVariant,
              pinterestButtonColor,
            )}
            {socialButton(
              LinkedInIcon,
              linkedinButtonLabel,
              linkedinButtonUrl,
              linkedinButtonSize,
              linkedinButtonVariant,
              linkedinButtonColor,
            )}
            {socialButton(
              YouTubeIcon,
              youtubeButtonLabel,
              youtubeButtonUrl,
              youtubeButtonSize,
              youtubeButtonVariant,
              youtubeButtonColor,
            )}
            {socialButton(
              RedditIcon,
              redditButtonLabel,
              redditButtonUrl,
              redditButtonSize,
              redditButtonVariant,
              redditButtonColor,
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

// const Footers9 = ({
//   title,
//   titleComponent,
//   titleVariant,
//   titleColor,
//   textAlign,
// }) => {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up('md'));
//   const classes = useStyles();
//   const expandIcon = matches ? null : <ExpandMoreIcon />;
//   return (
//     <Container className={classes.container}>
//       <Grid container justify="center" spacing={2}>
//         <Grid item xs={12} sm={12} md={3}>
//           <ExpansionPanel
//             className={classes.expansionPanel}
//             expanded={matches}
//           >
//             <ExpansionPanelSummary
//               expandIcon={expandIcon}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>
//                 Group 1
//               </Typography>
//             </ExpansionPanelSummary>
//             <ExpansionPanelDetails className={classes.expansionPanelDetails}>
//               <MLink color="inherit" component={Link} to="/">Home</MLink>
//               <MLink color="inherit" component={Link} to="/">Features</MLink>
//               <MLink color="inherit" component={Link} to="/">Pricing</MLink>
//               <MLink color="inherit" component={Link} to="/">Team</MLink>
//               <MLink color="inherit" component={Link} to="/">Contact</MLink>
//             </ExpansionPanelDetails>
//           </ExpansionPanel>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <ExpansionPanel
//             className={classes.expansionPanel}
//             expanded={matches}
//           >
//             <ExpansionPanelSummary
//               expandIcon={expandIcon}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>
//                 Group 2
//               </Typography>
//             </ExpansionPanelSummary>
//             <ExpansionPanelDetails className={classes.expansionPanelDetails}>
//               <MLink color="inherit" component={Link} to="/">One</MLink>
//               <MLink color="inherit" component={Link} to="/">Two</MLink>
//               <MLink color="inherit" component={Link} to="/">Three</MLink>
//               <MLink color="inherit" component={Link} to="/">Four</MLink>
//             </ExpansionPanelDetails>
//           </ExpansionPanel>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <ExpansionPanel
//             className={classes.expansionPanel}
//             expanded={matches}
//           >
//             <ExpansionPanelSummary
//               expandIcon={expandIcon}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Typography>
//                 Group 3
//               </Typography>
//             </ExpansionPanelSummary>
//             <ExpansionPanelDetails className={classes.expansionPanelDetails}>
//               <Typography align="left">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
//               </Typography>
//             </ExpansionPanelDetails>
//           </ExpansionPanel>
//         </Grid>
//         <Grid item xs={12} sm={12} md={3}>
//           <IconButton aria-label="add">
//             <TwitterIcon />
//           </IconButton>
//           <IconButton aria-label="add">
//             <FacebookIcon />
//           </IconButton>
//           <IconButton aria-label="add">
//             <InstagramIcon />
//           </IconButton>
//           <IconButton aria-label="add">
//             <PinterestIcon />
//           </IconButton>
//           <IconButton aria-label="add">
//             <LinkedInIcon />
//           </IconButton>
//           <IconButton aria-label="add">
//             <YouTubeIcon />
//           </IconButton>
//         </Grid>
//       </Grid>
//       <Typography
//         component="p"
//         color="textSecondary"
//         variant="caption"
//         align="center"
//       >
//         © 2020 Oddse. All Rights Reserved
//       </Typography>
//     </Container>
//   );
// };
Footers9.propTypes = {
  content: PropTypes.string,
  contentVariant: PropTypes.string,
  contentColor: PropTypes.string,
  primaryWidgetTitle: PropTypes.string,
  primaryWidgetPrimaryButtonLabel: PropTypes.string,
  primaryWidgetPrimaryButtonUrl: PropTypes.string,
  primaryWidgetSecondaryButtonLabel: PropTypes.string,
  primaryWidgetSecondaryButtonUrl: PropTypes.string,
  primaryWidgetTertiaryButtonLabel: PropTypes.string,
  primaryWidgetTertiaryButtonUrl: PropTypes.string,
  primaryWidgetQuaternaryButtonLabel: PropTypes.string,
  primaryWidgetQuaternaryButtonUrl: PropTypes.string,
  secondaryWidgetTitle: PropTypes.string,
  secondaryWidgetPrimaryButtonLabel: PropTypes.string,
  secondaryWidgetPrimaryButtonUrl: PropTypes.string,
  secondaryWidgetSecondaryButtonLabel: PropTypes.string,
  secondaryWidgetSecondaryButtonUrl: PropTypes.string,
  secondaryWidgetTertiaryButtonLabel: PropTypes.string,
  secondaryWidgetTertiaryButtonUrl: PropTypes.string,
  secondaryWidgetQuaternaryButtonLabel: PropTypes.string,
  secondaryWidgetQuaternaryButtonUrl: PropTypes.string,
  tertiaryWidgetTitle: PropTypes.string,
  quaternaryWidgetTitle: PropTypes.string,
  facebookButtonLabel: PropTypes.string,
  facebookButtonUrl: PropTypes.string,
  facebookButtonColor: PropTypes.string,
  facebookButtonVariant: PropTypes.string,
  facebookButtonSize: PropTypes.oneOf(['small', 'medium']),
  twitterButtonLabel: PropTypes.string,
  twitterButtonUrl: PropTypes.string,
  twitterButtonColor: PropTypes.string,
  twitterButtonVariant: PropTypes.string,
  twitterButtonSize: PropTypes.oneOf(['small', 'medium']),
  linkedinButtonLabel: PropTypes.string,
  linkedinButtonUrl: PropTypes.string,
  linkedinButtonColor: PropTypes.string,
  linkedinButtonVariant: PropTypes.string,
  linkedinButtonSize: PropTypes.oneOf(['small', 'medium']),
  instagramButtonLabel: PropTypes.string,
  instagramButtonUrl: PropTypes.string,
  instagramButtonColor: PropTypes.string,
  instagramButtonVariant: PropTypes.string,
  instagramButtonSize: PropTypes.oneOf(['small', 'medium']),
  pinterestButtonLabel: PropTypes.string,
  pinterestButtonUrl: PropTypes.string,
  pinterestButtonColor: PropTypes.string,
  pinterestButtonVariant: PropTypes.string,
  pinterestButtonSize: PropTypes.oneOf(['small', 'medium']),
  redditButtonLabel: PropTypes.string,
  redditButtonUrl: PropTypes.string,
  redditButtonColor: PropTypes.string,
  redditButtonVariant: PropTypes.string,
  redditButtonSize: PropTypes.oneOf(['small', 'medium']),
  youtubeButtonLabel: PropTypes.string,
  youtubeButtonUrl: PropTypes.string,
  youtubeButtonColor: PropTypes.string,
  youtubeButtonVariant: PropTypes.string,
  youtubeButtonSize: PropTypes.oneOf(['small', 'medium']),
  textAlign: PropTypes.string,
};
Footers9.defaultProps = {
  content: null,
  contentVariant: 'body1',
  contentColor: 'textSecondary',
  primaryWidgetTitle: null,
  primaryWidgetPrimaryButtonLabel: null,
  primaryWidgetPrimaryButtonUrl: null,
  primaryWidgetSecondaryButtonLabel: null,
  primaryWidgetSecondaryButtonUrl: null,
  primaryWidgetTertiaryButtonLabel: null,
  primaryWidgetTertiaryButtonUrl: null,
  primaryWidgetQuaternaryButtonLabel: null,
  primaryWidgetQuaternaryButtonUrl: null,
  secondaryWidgetTitle: null,
  secondaryWidgetPrimaryButtonLabel: null,
  secondaryWidgetPrimaryButtonUrl: null,
  secondaryWidgetSecondaryButtonLabel: null,
  secondaryWidgetSecondaryButtonUrl: null,
  secondaryWidgetTertiaryButtonLabel: null,
  secondaryWidgetTertiaryButtonUrl: null,
  secondaryWidgetQuaternaryButtonLabel: null,
  secondaryWidgetQuaternaryButtonUrl: null,
  tertiaryWidgetTitle: null,
  quaternaryWidgetTitle: null,
  facebookButtonLabel: null,
  facebookButtonUrl: null,
  facebookButtonColor: null,
  facebookButtonVariant: null,
  facebookButtonSize: null,
  twitterButtonLabel: null,
  twitterButtonUrl: null,
  twitterButtonColor: null,
  twitterButtonVariant: null,
  twitterButtonSize: null,
  linkedinButtonLabel: null,
  linkedinButtonUrl: null,
  linkedinButtonColor: null,
  linkedinButtonVariant: null,
  linkedinButtonSize: null,
  instagramButtonLabel: null,
  instagramButtonUrl: null,
  instagramButtonColor: null,
  instagramButtonVariant: null,
  instagramButtonSize: null,
  pinterestButtonLabel: null,
  pinterestButtonUrl: null,
  pinterestButtonColor: null,
  pinterestButtonVariant: null,
  pinterestButtonSize: null,
  redditButtonLabel: null,
  redditButtonUrl: null,
  redditButtonColor: null,
  redditButtonVariant: null,
  redditButtonSize: null,
  youtubeButtonLabel: null,
  youtubeButtonUrl: null,
  youtubeButtonColor: null,
  youtubeButtonVariant: null,
  youtubeButtonSize: null,
  textAlign: 'center',
};

export default Footers9;
