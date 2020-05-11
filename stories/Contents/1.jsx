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

const Contents1 = ({
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
Contents1.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
};
Contents1.defaultProps = {
  title: null,
  titleColor: 'textSecondary',
  titleComponent: 'p',
  titleVariant: 'subtitle1',
};

export default Contents1;
