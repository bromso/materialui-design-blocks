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

const Footers1 = ({
  title,
  titleComponent,
  titleVariant,
  titleColor,
  textAlign,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        <Grid item md={12}>
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
Footers1.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  textAlign: PropTypes.string,
};
Footers1.defaultProps = {
  title: null,
  titleComponent: 'p',
  titleVariant: 'subtitle1',
  titleColor: 'textSecondary',
  textAlign: 'center',
};

export default Footers1;
