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

const Contents15 = ({
  title,
  titleComponent,
  titleVariant,
  titleColor,
  primaryImageUrl,
  primaryImageAlt,
  secondaryImageUrl,
  secondaryImageAlt,
  tertiaryImageUrl,
  tertiaryImageAlt,
  textAlign,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        alignItems="center"
        justify="center"
      >
        <Grid item md={1}>
          <img className={classes.image} src={primaryImageUrl} alt={primaryImageAlt} />
        </Grid>
        <Grid item md={1}>
          <img className={classes.image} src={secondaryImageUrl} alt={secondaryImageAlt} />
        </Grid>
        <Grid item md={1}>
          <img className={classes.image} src={tertiaryImageUrl} alt={tertiaryImageAlt} />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item md={8}>
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
Contents15.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  primaryImageUrl: PropTypes.string,
  primaryImageAlt: PropTypes.string,
  secondaryImageUrl: PropTypes.string,
  secondaryImageAlt: PropTypes.string,
  tertiaryImageUrl: PropTypes.string,
  tertiaryImageAlt: PropTypes.string,
  textAlign: PropTypes.string,
};
Contents15.defaultProps = {
  title: null,
  titleComponent: 'p',
  titleVariant: 'subtitle1',
  titleColor: 'textSecondary',
  primaryImageUrl: null,
  primaryImageAlt: null,
  secondaryImageUrl: null,
  secondaryImageAlt: null,
  tertiaryImageUrl: null,
  tertiaryImageAlt: null,
  textAlign: 'center',
};

export default Contents15;
