import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

const Sockets4 = ({
  primaryButtonLabel,
  primaryButtonUrl,
  secondaryButtonLabel,
  secondaryButtonUrl,
  tertiaryButtonLabel,
  tertiaryButtonUrl,
  quaternaryButtonLabel,
  quaternaryButtonUrl,
  quinaryButtonLabel,
  quinaryButtonUrl,
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
        <Grid item md={10}>
          <Button to={primaryButtonUrl}>{primaryButtonLabel}</Button>
          <Button to={secondaryButtonUrl}>{secondaryButtonLabel}</Button>
          <Button to={tertiaryButtonUrl}>{tertiaryButtonLabel}</Button>
          <Button to={quaternaryButtonUrl}>{quaternaryButtonLabel}</Button>
        </Grid>
        <Grid item md={2}>
          <Button to={quinaryButtonUrl} variant="contained">{quinaryButtonLabel}</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
Sockets4.propTypes = {
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  tertiaryButtonLabel: PropTypes.string,
  tertiaryButtonUrl: PropTypes.string,
  quaternaryButtonLabel: PropTypes.string,
  quaternaryButtonUrl: PropTypes.string,
  quinaryButtonLabel: PropTypes.string,
  quinaryButtonUrl: PropTypes.string,
  reverse: PropTypes.bool,
};
Sockets4.defaultProps = {
  primaryButtonLabel: null,
  primaryButtonUrl: null,
  secondaryButtonLabel: null,
  secondaryButtonUrl: null,
  tertiaryButtonLabel: null,
  tertiaryButtonUrl: null,
  quaternaryButtonLabel: null,
  quaternaryButtonUrl: null,
  quinaryButtonLabel: null,
  quinaryButtonUrl: null,
  reverse: false,
};

export default Sockets4;
