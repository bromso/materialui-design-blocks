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

const Contents8 = ({
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
  primaryButtonUrl,
  secondaryButtonUrl,
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
        <Grid item md={6}>
          <Link to={primaryButtonUrl}>
            <img className={classes.image} src={primaryImageUrl} alt={primaryImageAlt} />
          </Link>
        </Grid>
        <Grid item md={6}>
          <Link to={secondaryButtonUrl}>
            <img className={classes.image} src={secondaryImageUrl} alt={secondaryImageAlt} />
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
Contents8.propTypes = {
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
  textAlign: PropTypes.string,
};
Contents8.defaultProps = {
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
  textAlign: 'center',
};

export default Contents8;
