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

const Calltoactions6 = ({
  title,
  titleComponent,
  titleVariant,
  titleColor,
  content,
  contentComponent,
  contentVariant,
  contentColor,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item md={12}>
          <Typography
            color={titleColor}
            variant={titleVariant}
            component={titleComponent}
            align="center"
            gutterBottom
          >
            {title}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography
            color={contentColor}
            variant={contentVariant}
            component={contentComponent}
            gutterBottom
          >
            {content}
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography
            color={contentColor}
            variant={contentVariant}
            component={contentComponent}
            gutterBottom
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
Calltoactions6.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.string,
  contentVariant: PropTypes.string,
  contentColor: PropTypes.string,
};
Calltoactions6.defaultProps = {
  title: null,
  titleComponent: 'h1',
  titleVariant: 'h3',
  titleColor: 'textPrimary',
  content: null,
  contentComponent: 'p',
  contentVariant: 'subtitle1',
  contentColor: 'textSecondary',
};

export default Calltoactions6;
