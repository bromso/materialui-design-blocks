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

const Contents5 = ({
  title,
  titleComponent,
  titleVariant,
  titleColor,
  content,
  contentComponent,
  contentVariant,
  contentColor,
  textAlign,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        <Grid item md={12}>
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
            component={contentComponent}
            align={textAlign}
            gutterBottom
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
Contents5.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.string,
  contentVariant: PropTypes.string,
  contentColor: PropTypes.string,
  textAlign: PropTypes.string,
};
Contents5.defaultProps = {
  title: null,
  titleComponent: 'h1',
  titleVariant: 'h4',
  titleColor: 'textPrimary',
  content: null,
  contentComponent: 'p',
  contentVariant: 'subtitle1',
  contentColor: 'textSecondary',
  textAlign: 'left',
};

export default Contents5;
