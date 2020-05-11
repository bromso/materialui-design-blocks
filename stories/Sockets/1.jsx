import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const currentYear = new Date().getFullYear();

const Sockets1 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  textAlign,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item sm={12}>
          <Typography
            color={titleColor}
            variant={titleVariant}
            component={titleComponent}
            align={textAlign}
            gutterBottom
          >
            {`© ${currentYear} ${title}`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
Sockets1.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  textAlign: PropTypes.string,
};
Sockets1.defaultProps = {
  title: null,
  titleColor: 'textSecondary',
  titleComponent: 'p',
  titleVariant: 'caption',
  textAlign: 'center',
};

export default Sockets1;
