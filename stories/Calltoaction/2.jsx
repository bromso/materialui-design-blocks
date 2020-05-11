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

const Calltoactions2 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        <Grid item md={8}>
          <Typography
            align="center"
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
Calltoactions2.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
};
Calltoactions2.defaultProps = {
  title: null,
  titleColor: 'textSecondary',
  titleComponent: 'p',
  titleVariant: 'subtitle1',
};

export default Calltoactions2;
