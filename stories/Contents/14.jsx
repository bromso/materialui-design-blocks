import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
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

const Contents14 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  content,
  contentColor,
  contentVariant,
  primaryImageUrl,
  primaryImageAlt,
  primaryButtonLabel,
  primaryButtonUrl,
  reverse,
  backgroundImageUrl,
}) => {
  const classes = useStyles();
  return (
    <Container
      className={classes.container}
      {...backgroundImageUrl && { style: { backgroundImage: `url(${backgroundImageUrl})` } }}
    >
      <Grid
        container
        alignItems="center"
        justify="space-between"
        direction={`row${reverse ? '-reverse' : ''}`}
      >
        <Grid item md={6}>
          <img className={classes.image} src={primaryImageUrl} alt={primaryImageAlt} />
        </Grid>
        <Grid item md={6}>
          <GitHubIcon />
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
          >
            {content}
          </Typography>
          <Button color="primary" variant="contained" component={Link} to={primaryButtonUrl}>
            {primaryButtonLabel}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
Contents14.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  contentVariant: PropTypes.string,
  primaryImageUrl: PropTypes.string,
  primaryImageAlt: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  reverse: PropTypes.bool,
  backgroundImageUrl: PropTypes.string,
};
Contents14.defaultProps = {
  title: null,
  titleColor: 'textPrimary',
  titleComponent: 'h1',
  titleVariant: 'h4',
  content: null,
  contentColor: 'textSecondary',
  contentVariant: 'subtitle1',
  primaryImageUrl: null,
  primaryImageAlt: null,
  primaryButtonLabel: null,
  primaryButtonUrl: null,
  reverse: false,
  backgroundImageUrl: null,
};

export default Contents14;
