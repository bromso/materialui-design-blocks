import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  image: {
    display: 'block',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Contents10 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  content,
  contentColor,
  contentVariant,
  primaryImageUrl,
  primaryImageAlt,
  secondaryImageUrl,
  secondaryImageAlt,
  tertiaryImageUrl,
  tertiaryImageAlt,
  quaternaryImageUrl,
  quaternaryImageAlt,
  primaryButtonUrl,
  secondaryButtonUrl,
  tertiaryButtonUrl,
  quaternaryButtonUrl,
  textAlign,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
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
          <Typography
            color={contentColor}
            variant={contentVariant}
            align={textAlign}
            paragraph
            gutterBottom
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={6} md={3}>
          <Link to={primaryButtonUrl}>
            <img className={classes.image} src={primaryImageUrl} alt={primaryImageAlt} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link to={secondaryButtonUrl}>
            <img className={classes.image} src={secondaryImageUrl} alt={secondaryImageAlt} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link to={tertiaryButtonUrl}>
            <img className={classes.image} src={tertiaryImageUrl} alt={tertiaryImageAlt} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link to={quaternaryButtonUrl}>
            <img className={classes.image} src={quaternaryImageUrl} alt={quaternaryImageAlt} />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
Contents10.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  contentVariant: PropTypes.string,
  primaryImageUrl: PropTypes.string,
  primaryImageAlt: PropTypes.string,
  secondaryImageUrl: PropTypes.string,
  secondaryImageAlt: PropTypes.string,
  tertiaryImageUrl: PropTypes.string,
  tertiaryImageAlt: PropTypes.string,
  quaternaryImageUrl: PropTypes.string,
  quaternaryImageAlt: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  tertiaryButtonUrl: PropTypes.string,
  quaternaryButtonUrl: PropTypes.string,
  textAlign: PropTypes.string,
};
Contents10.defaultProps = {
  title: null,
  titleColor: 'textPrimary',
  titleComponent: 'h1',
  titleVariant: 'h4',
  content: null,
  contentColor: 'textSecondary',
  contentVariant: 'subtitle1',
  primaryImageUrl: null,
  primaryImageAlt: null,
  secondaryImageUrl: null,
  secondaryImageAlt: null,
  tertiaryImageUrl: null,
  tertiaryImageAlt: null,
  quaternaryImageUrl: null,
  quaternaryImageAlt: null,
  primaryButtonUrl: null,
  secondaryButtonUrl: null,
  tertiaryButtonUrl: null,
  quaternaryButtonUrl: null,
  textAlign: 'center',
};

export default Contents10;
