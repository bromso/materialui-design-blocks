import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

const Calltoactions4 = ({
  title,
  titleComponent,
  titleVariant,
  titleColor,
  reverse,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        alignItems="left"
        justify="space-between"
        direction={`row${reverse ? '-reverse' : ''}`}
      >
        <Grid item sm={10} md={8}>
          <Typography
            color={titleColor}
            variant={titleVariant}
            component={titleComponent}
            gutterBottom
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
Calltoactions4.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  reverse: PropTypes.bool,
};
Calltoactions4.defaultProps = {
  title: null,
  titleComponent: 'p',
  titleVariant: 'subtitle1',
  titleColor: 'textSecondary',
  reverse: false,
};

export default Calltoactions4;
