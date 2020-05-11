import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

const Sockets3 = ({
  title,
  titleComponent,
  titleVariant,
  titleColor,
  textAlign,
  primaryButtonLabel,
  primaryButtonUrl,
  secondaryButtonLabel,
  secondaryButtonUrl,
  tertiaryButtonLabel,
  tertiaryButtonUrl,
  quaternaryButtonLabel,
  quaternaryButtonUrl,
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
        <Grid item sm={8} md={9}>
          <Button to={primaryButtonUrl}>{primaryButtonLabel}</Button>
          <Button to={secondaryButtonUrl}>{secondaryButtonLabel}</Button>
          <Button to={tertiaryButtonUrl}>{tertiaryButtonLabel}</Button>
          <Button to={quaternaryButtonUrl}>{quaternaryButtonLabel}</Button>
        </Grid>
        <Grid item sm={4} md={3}>
          <Typography
            color={titleColor}
            variant={titleVariant}
            component={titleComponent}
            align={textAlign}
            gutterBottom
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
Sockets3.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  textAlign: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  tertiaryButtonLabel: PropTypes.string,
  tertiaryButtonUrl: PropTypes.string,
  quaternaryButtonLabel: PropTypes.string,
  quaternaryButtonUrl: PropTypes.string,
  reverse: PropTypes.bool,
};
Sockets3.defaultProps = {
  title: null,
  titleComponent: 'p',
  titleVariant: 'subtitle1',
  titleColor: 'textSecondary',
  textAlign: 'center',
  primaryButtonLabel: null,
  primaryButtonUrl: null,
  secondaryButtonLabel: null,
  secondaryButtonUrl: null,
  tertiaryButtonLabel: null,
  tertiaryButtonUrl: null,
  quaternaryButtonLabel: null,
  quaternaryButtonUrl: null,
  reverse: false,
};

export default Sockets3;
