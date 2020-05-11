import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import Link from '../Link';
// import Shadow from '../Shadow';
// import wrap from '../../utils/wrap';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Contents9 = ({
  className,
  title,
  titleColor,
  titleComponent,
  titleVariant,
  content,
  contentColor,
  contentVariant,
  textAlign,
  children,
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
            gutterBottom={!!content}
          >
            {title}
          </Typography>
          <Typography
            color={contentColor}
            variant={contentVariant}
            align={textAlign}
            paragraph={!!children}
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
      {children}
    </Container>
  );
};
Contents9.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  contentVariant: PropTypes.string,
  textAlign: PropTypes.string,
  children: PropTypes.node,
};
Contents9.defaultProps = {
  className: null,
  title: null,
  titleColor: 'textPrimary',
  titleComponent: 'h1',
  titleVariant: 'h4',
  content: null,
  contentColor: 'textSecondary',
  contentVariant: 'subtitle1',
  textAlign: 'center',
  children: null,
};

export default Contents9;
