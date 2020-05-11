import React from 'react';
import classnames from 'classnames';
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

const button = (label, url, size, variant, color, onClick) => {
  if (!label) return null;
  return (
    <Button
      {...url && {
        component: Link,
        to: url,
      }}
      {...onClick && {
        onClick,
      }}
      color={color}
      variant={variant}
      size={size}
    >
      {label}
    </Button>
  );
};

const Calltoactions7 = ({
  className,
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
  primaryButtonColor,
  primaryButtonVariant,
  primaryButtonSize,
  secondaryButtonLabel,
  secondaryButtonUrl,
  secondaryButtonColor,
  secondaryButtonVariant,
  secondaryButtonSize,
  textAlign,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  const classes = useStyles();
  return (
    <Container className={classnames(classes.container, className)}>
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
          {content ? (
            <Typography
              color={contentColor}
              variant={contentVariant}
              align={textAlign}
              paragraph
              gutterBottom
            >
              {content}
            </Typography>
          ) : null}
        </Grid>
        <Grid item container md={8} justify="center">
          {button(
            primaryButtonLabel,
            primaryButtonUrl,
            primaryButtonSize,
            primaryButtonVariant,
            primaryButtonColor,
            onPrimaryButtonClick,
          )}
          {button(
            secondaryButtonLabel,
            secondaryButtonUrl,
            secondaryButtonSize,
            secondaryButtonVariant,
            secondaryButtonColor,
            onSecondaryButtonClick,
          )}
        </Grid>
        <Grid item md={8}>
          <img className={classes.image} src={primaryImageUrl} alt={primaryImageAlt} />
        </Grid>
      </Grid>
    </Container>
  );
};
Calltoactions7.propTypes = {
  className: PropTypes.string,
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
  primaryButtonColor: PropTypes.string,
  primaryButtonVariant: PropTypes.string,
  primaryButtonSize: PropTypes.string,
  onPrimaryButtonClick: PropTypes.func,
  secondaryButtonLabel: PropTypes.string,
  secondaryButtonUrl: PropTypes.string,
  secondaryButtonColor: PropTypes.string,
  secondaryButtonVariant: PropTypes.string,
  secondaryButtonSize: PropTypes.string,
  onSecondaryButtonClick: PropTypes.func,
  textAlign: PropTypes.string,
};
Calltoactions7.defaultProps = {
  className: null,
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
  primaryButtonColor: 'primary',
  primaryButtonVariant: 'contained',
  primaryButtonSize: 'medium',
  secondaryButtonLabel: null,
  secondaryButtonUrl: null,
  secondaryButtonColor: 'default',
  secondaryButtonVariant: 'outlined',
  secondaryButtonSize: 'medium',
  onPrimaryButtonClick: null,
  onSecondaryButtonClick: null,
  textAlign: 'center',
};

export default Calltoactions7;
