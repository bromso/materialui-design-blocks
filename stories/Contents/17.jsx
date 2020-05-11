import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
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

const Contents17 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  content,
  contentColor,
  contentVariant,
  caption,
  captionColor,
  captionVariant,
  primaryImageUrl,
  primaryImageAlt,
  primaryButtonLabel,
  primaryButtonUrl,
  secondaryImageUrl,
  secondaryImageAlt,
  tertiaryImageUrl,
  tertiaryImageAlt,
  quaternaryImageUrl,
  quaternaryImageAlt,
  reverse,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container alignItems="center" justify="space-between" direction={`row${reverse ? '-reverse' : ''}`}>
        <Grid item md={4}>
          <img className={classes.image} src={primaryImageUrl} alt={primaryImageAlt} />
        </Grid>
        <Grid item md={6}>
          <Typography
            color={titleColor}
            variant={titleVariant}
            component={titleComponent}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            color={contentColor}
            variant={contentVariant}
            paragraph
            gutterBottom
          >
            {content}
          </Typography>
          <Typography
            color={captionColor}
            variant={captionVariant}
            paragraph
            gutterBottom
          >
            {caption}
          </Typography>
          <Icon className="fa fa-plus-circle" color="primary" fontSize="small" />
          <Icon className="fa fa-plus-circle" color="primary" fontSize="small" />
          <Icon className="fa fa-plus-circle" color="primary" fontSize="small" />
          <Icon className="fa fa-plus-circle" color="primary" fontSize="small" />
        </Grid>
      </Grid>
    </Container>
  );
};
Contents17.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  contentVariant: PropTypes.string,
  caption: PropTypes.string,
  captionColor: PropTypes.string,
  captionVariant: PropTypes.string,
  primaryImageUrl: PropTypes.string,
  primaryImageAlt: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  secondaryImageUrl: PropTypes.string,
  secondaryImageAlt: PropTypes.string,
  tertiaryImageUrl: PropTypes.string,
  tertiaryImageAlt: PropTypes.string,
  quaternaryImageUrl: PropTypes.string,
  quaternaryImageAlt: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  reverse: PropTypes.bool,
};
Contents17.defaultProps = {
  title: null,
  titleColor: 'textPrimary',
  titleComponent: 'h1',
  titleVariant: 'h4',
  content: null,
  contentColor: 'textSecondary',
  contentVariant: 'subtitle1',
  caption: null,
  captionColor: null,
  captionVariant: 'caption',
  primaryImageUrl: null,
  primaryImageAlt: null,
  secondaryImageUrl: null,
  secondaryImageAlt: null,
  tertiaryImageUrl: null,
  tertiaryImageAlt: null,
  quaternaryImageUrl: null,
  quaternaryImageAlt: null,
  primaryButtonLabel: null,
  primaryButtonLabel: null,
  primaryButtonUrl: null,
  reverse: false,
};

export default Contents17;
