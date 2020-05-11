import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

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

const Sockets4 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  primaryButtonLabel,
  primaryButtonUrl,
  secondaryButtonLabel,
  secondaryButtonUrl,
  tertiaryButtonLabel,
  tertiaryButtonUrl,
  quaternaryButtonLabel,
  quaternaryButtonUrl,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item sm={6}>
          <Typography
            color={titleColor}
            variant={titleVariant}
            component={titleComponent}
            gutterBottom
          >
            {`© ${currentYear} ${title}`}
          </Typography>
        </Grid>
        <Grid item sm={6}>
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
      </Grid>
    </Container>
  );
};
Sockets4.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  tertiaryButtonLabel: PropTypes.string,
  tertiaryButtonUrl: PropTypes.string,
  quaternaryButtonLabel: PropTypes.string,
  quaternaryButtonUrl: PropTypes.string,
};
Sockets4.defaultProps = {
  title: null,
  titleColor: 'textSecondary',
  titleComponent: 'p',
  titleVariant: 'caption',
  primaryButtonLabel: null,
  primaryButtonUrl: null,
  secondaryButtonLabel: null,
  secondaryButtonUrl: null,
  tertiaryButtonLabel: null,
  tertiaryButtonUrl: null,
  quaternaryButtonLabel: null,
  quaternaryButtonUrl: null,
};

export default Sockets4;
