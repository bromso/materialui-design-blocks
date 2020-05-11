import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

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

const Contents13 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  content,
  contentColor,
  contentVariant,
  primaryButtonLabel,
  primaryButtonUrl,
  primaryButtonColor,
  primaryButtonVariant,
  primaryButtonSize,
  primaryImageAlt,
  primaryImageUrl,
  spacing,
  reverse,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        spacing={spacing}
        direction={`row${reverse ? '-reverse' : ''}`}
      >
        <Grid item md={6}>
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
          >
            {content}
          </Typography>
          <Button
            color={primaryButtonColor}
            variant={primaryButtonVariant}
            size={primaryButtonSize}
            component={Link}
            to={primaryButtonUrl}
          >
            {primaryButtonLabel}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
Contents13.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  contentVariant: PropTypes.string,
  primaryButtonLabel: PropTypes.string,
  primaryButtonUrl: PropTypes.string,
  primaryButtonColor: PropTypes.string,
  primaryButtonVariant: PropTypes.string,
  primaryButtonSize: PropTypes.string,
  spacing: PropTypes.number,
  reverse: PropTypes.bool,
  primaryImageAlt: PropTypes.node,
  primaryImageUrl: PropTypes.node,
};
Contents13.defaultProps = {
  title: null,
  titleColor: 'textPrimary',
  titleComponent: 'h1',
  titleVariant: 'h4',
  content: null,
  contentColor: 'textSecondary',
  contentVariant: 'subtitle1',
  primaryButtonLabel: null,
  primaryButtonColor: 'default',
  primaryButtonUrl: null,
  primaryButtonVariant: 'contained',
  primaryButtonSize: 'medium',
  primaryImageAlt: null,
  primaryImageUrl: null,
  spacing: 4,
  reverse: false,
};

export default Contents13;
