import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
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

const currentYear = new Date().getFullYear();

const button = (label, url) => {
  if (!label) return null;
  return (
    <Button
      color="default"
      size="small"
      component={Link}
      to={url}
    >
      {label}
    </Button>
  );
};

const image = (url, alt, height, classes) => {
  if (!url) return null;
  return (
    <img
      className={classes}
      src={url}
      alt={alt}
      height={height}
    />
  );
};

const text = (title, color, variant, component, align) => {
  if (!title) return null;
  return (
    <Typography
      color={color}
      variant={variant}
      component={component}
      align={align}
      gutterBottom
    >
      {`© ${currentYear} ${title}`}
    </Typography>
  );
};

const Sockets2 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  titleAlign,
  primaryButtonLabel,
  primaryButtonUrl,
  secondaryButtonLabel,
  secondaryButtonUrl,
  tertiaryButtonLabel,
  tertiaryButtonUrl,
  quaternaryButtonLabel,
  quaternaryButtonUrl,
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
  reverse,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        direction={`row${reverse ? '-reverse' : ''}`}
      >
        <Grid item xs={12} sm={6} md={4}>
          {text(
            title,
            titleColor,
            titleVariant,
            titleComponent,
            titleAlign,
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {button(
            primaryButtonLabel,
            primaryButtonUrl,
          )}
          {button(
            secondaryButtonLabel,
            secondaryButtonUrl,
          )}
          {button(
            tertiaryButtonLabel,
            tertiaryButtonUrl,
          )}
          {button(
            quaternaryButtonLabel,
            quaternaryButtonUrl,
          )}
        </Grid>
        <Grid item sm={12} md={4} align="center">
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
        </Grid>
      </Grid>
    </Container>
  );
};
Sockets2.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  titleAlign: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  tertiaryButtonLabel: PropTypes.string,
  tertiaryButtonUrl: PropTypes.string,
  quaternaryButtonLabel: PropTypes.string,
  quaternaryButtonUrl: PropTypes.string,
  reverse: PropTypes.bool,
  facebookButtonLabel: PropTypes.string,
  facebookButtonUrl: PropTypes.string,
  facebookButtonColor: PropTypes.string,
  facebookButtonVariant: PropTypes.string,
  facebookButtonSize: PropTypes.string,
  twitterButtonLabel: PropTypes.string,
  twitterButtonUrl: PropTypes.string,
  twitterButtonColor: PropTypes.string,
  twitterButtonVariant: PropTypes.string,
  twitterButtonSize: PropTypes.string,
  linkedinButtonLabel: PropTypes.string,
  linkedinButtonUrl: PropTypes.string,
  linkedinButtonColor: PropTypes.string,
  linkedinButtonVariant: PropTypes.string,
  linkedinButtonSize: PropTypes.string,
  instagramButtonLabel: PropTypes.string,
  instagramButtonUrl: PropTypes.string,
  instagramButtonColor: PropTypes.string,
  instagramButtonVariant: PropTypes.string,
  instagramButtonSize: PropTypes.string,
  pinterestButtonLabel: PropTypes.string,
  pinterestButtonUrl: PropTypes.string,
  pinterestButtonColor: PropTypes.string,
  pinterestButtonVariant: PropTypes.string,
  pinterestButtonSize: PropTypes.string,
  redditButtonLabel: PropTypes.string,
  redditButtonUrl: PropTypes.string,
  redditButtonColor: PropTypes.string,
  redditButtonVariant: PropTypes.string,
  redditButtonSize: PropTypes.string,
  youtubeButtonLabel: PropTypes.string,
  youtubeButtonUrl: PropTypes.string,
  youtubeButtonColor: PropTypes.string,
  youtubeButtonVariant: PropTypes.string,
  youtubeButtonSize: PropTypes.string,
};
Sockets2.defaultProps = {
  title: null,
  titleColor: 'textSecondary',
  titleComponent: 'p',
  titleVariant: 'caption',
  titleAlign: 'left',
  primaryButtonLabel: null,
  primaryButtonUrl: null,
  secondaryButtonLabel: null,
  secondaryButtonUrl: null,
  tertiaryButtonLabel: null,
  tertiaryButtonUrl: null,
  quaternaryButtonLabel: null,
  quaternaryButtonUrl: null,
  reverse: false,
  facebookButtonLabel: null,
  facebookButtonUrl: null,
  facebookButtonColor: 'inherit',
  facebookButtonVariant: null,
  facebookButtonSize: 'medium',
  twitterButtonLabel: null,
  twitterButtonUrl: null,
  twitterButtonColor: 'inherit',
  twitterButtonVariant: null,
  twitterButtonSize: 'medium',
  linkedinButtonLabel: null,
  linkedinButtonUrl: null,
  linkedinButtonColor: 'inherit',
  linkedinButtonVariant: null,
  linkedinButtonSize: 'medium',
  instagramButtonLabel: null,
  instagramButtonUrl: null,
  instagramButtonColor: 'inherit',
  instagramButtonVariant: null,
  instagramButtonSize: 'medium',
  pinterestButtonLabel: null,
  pinterestButtonUrl: null,
  pinterestButtonColor: 'inherit',
  pinterestButtonVariant: null,
  pinterestButtonSize: 'medium',
  redditButtonLabel: null,
  redditButtonUrl: null,
  redditButtonColor: 'inherit',
  redditButtonVariant: '',
  redditButtonSize: 'medium',
  youtubeButtonLabel: null,
  youtubeButtonUrl: null,
  youtubeButtonColor: 'inherit',
  youtubeButtonVariant: null,
  youtubeButtonSize: 'medium',
};

export default Sockets2;
