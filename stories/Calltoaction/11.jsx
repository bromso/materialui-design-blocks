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
  image: {
    display: 'block',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

const Contents11 = ({
  title,
  titleColor,
  titleComponent,
  titleVariant,
  content,
  contentColor,
  contentVariant,
  primaryImageUrl,
  primaryImageAlt,
  textAlign,
  reverse,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container alignItems="center" justify="space-between" direction={`row${reverse ? '-reverse' : ''}`}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <img className={classes.image} src={primaryImageUrl} alt={primaryImageAlt} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
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
          >
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
Contents11.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleComponent: PropTypes.string,
  titleVariant: PropTypes.string,
  content: PropTypes.string,
  contentColor: PropTypes.string,
  contentVariant: PropTypes.string,
  primaryImageUrl: PropTypes.string,
  primaryImageAlt: PropTypes.string,
  textAlign: PropTypes.string,
  reverse: PropTypes.bool,
};
Contents11.defaultProps = {
  title: null,
  titleColor: 'textPrimary',
  titleComponent: 'h1',
  titleVariant: 'h4',
  content: null,
  contentColor: 'textSecondary',
  contentVariant: 'subtitle1',
  primaryImageUrl: null,
  primaryImageAlt: null,
  textAlign: 'left',
  reverse: false,
};

export default Contents11;
