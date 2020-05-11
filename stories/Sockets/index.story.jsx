import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
} from '@storybook/addon-knobs';

import Sockets1 from './1';
import Sockets2 from './2';
import Sockets3 from './3';
import Sockets4 from './4';

export default {
  title: 'Sockets',
  decorators: [withKnobs],
};

const textComponents = 'p h1 h2 h3 h4 h5 h6'.split(' ');
const textVariants = 'h1 h2 h3 h4 h5 h6 subtitle1 subtitle2 body1 body2 caption button overline srOnly inherit'.split(' ');
const textColors = 'inherit primary secondary textPrimary textSecondary error'.split(' ');
const textAligns = 'left center right justify'.split(' ');
const buttonColors = 'default inherit primary secondary'.split(' ');
const buttonVariants = 'text outlined contained'.split(' ');
const buttonSize = 'small medium large'.split(' ');

export const sockets1 = () => (
  <Sockets1
    title={text('title', 'Froala. All rights reserved.')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'caption')}
    textAlign={select('textAlign', textAligns, 'center')}
  />
);

export const sockets2 = () => (
  <Sockets2
    title={text('title', 'Froala. All rights reserved.')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'caption')}
    primaryImageHeight={number('primaryImageHeight', 20)}
    primaryButtonLabel={text('primaryButtonLabel', 'Privacy')}
    primaryButtonUrl={text('primaryButtonUrl', '/privacy')}
    secondaryButtonLabel={text('secondaryButtonLabel', 'Terms')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/terms')}
    tertiaryButtonLabel={text('tertiaryButtonLabel', 'Legal')}
    tertiaryButtonUrl={text('tertiaryButtonUrl', '/legal')}
    quaternaryButtonLabel={text('quaternaryButtonLabel', 'Sitemap')}
    quaternaryButtonUrl={text('quaternaryButtonUrl', '/sitemap')}
    facebookButtonLabel={text('facebookButtonLabel', 'Facebook')}
    facebookButtonUrl={text('facebookButtonUrl', 'https://www.facebook.com/')}
    facebookButtonColor={text('facebookButtonColor', 'inherit')}
    facebookButtonVariant={text('facebookButtonVariant', '')}
    facebookButtonSize={text('facebookButtonSize', 'medium')}
    twitterButtonLabel={text('twitterButtonLabel', 'Twitter')}
    twitterButtonUrl={text('twitterButtonUrl', 'https://www.twitter.com/')}
    twitterButtonColor={text('twitterButtonColor', 'inherit')}
    twitterButtonVariant={text('twitterButtonVariant', '')}
    twitterButtonSize={text('twitterButtonSize', 'medium')}
    linkedinButtonLabel={text('linkedinButtonLabel', 'LinkedIn')}
    linkedinButtonUrl={text('linkedinButtonUrl', 'https://www.linkedin.com/')}
    linkedinButtonColor={text('linkedinButtonColor', 'inherit')}
    linkedinButtonVariant={text('linkedinButtonVariant', '')}
    linkedinButtonSize={text('linkedinButtonSize', 'medium')}
    instragramButtonLabel={text('instragramButtonLabel', 'Instagram')}
    instragramButtonUrl={text('instragramButtonUrl', 'https://www.instragram.com/')}
    instragramButtonColor={text('instragramButtonColor', 'inherit')}
    instragramButtonVariant={text('instragramButtonVariant', '')}
    instragramButtonSize={text('instragramButtonSize', 'medium')}
    pinterestButtonLabel={text('pinterestButtonLabel', 'Pinterest')}
    pinterestButtonUrl={text('pinterestButtonUrl', 'https://www.pinterest.com/')}
    pinterestButtonColor={text('pinterestButtonColor', 'inherit')}
    pinterestButtonVariant={text('pinterestButtonVariant', '')}
    pinterestButtonSize={text('pinterestButtonSize', 'medium')}
    redditButtonLabel={text('redditButtonLabel', 'Reddit')}
    redditButtonUrl={text('redditButtonUrl', 'https://www.reddit.com/')}
    redditButtonColor={text('redditButtonColor', 'inherit')}
    redditButtonVariant={text('redditButtonVariant', '')}
    redditButtonSize={text('redditButtonSize', 'medium')}
    youtubeButtonLabel={text('youtubeButtonLabel', 'YouTube')}
    youtubeButtonUrl={text('youtubeButtonUrl', 'https://www.youtube.com/')}
    youtubeButtonColor={text('youtubeButtonColor', 'inherit')}
    youtubeButtonVariant={text('youtubeButtonVariant', '')}
    youtubeButtonSize={text('youtubeButtonSize', 'medium')}
    reverse={boolean('reverse', false)}
  />
);

export const sockets3 = () => (
  <Sockets3
    title={text('title', '© 2018 Froala. All Rights Reserved')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
    primaryButtonLabel={text('primaryButtonLabel', 'Services')}
    primaryButtonUrl={text('primaryButtonUrl', '/')}
    secondaryButtonLabel={text('secondaryButtonLabel', 'Features')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/')}
    tertiaryButtonLabel={text('tertiaryButtonLabel', 'About')}
    tertiaryButtonUrl={text('tertiaryButtonUrl', '/')}
    quaternaryButtonLabel={text('quaternaryButtonLabel', 'Terms')}
    quaternaryButtonUrl={text('quaternaryButtonUrl', '/')}
    reverse={boolean('reverse', false)}
  />
);

export const sockets4 = () => (
  <Sockets4
    title={text('title', '© 2018 Froala. All Rights Reserved')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
    primaryButtonLabel={text('primaryButtonLabel', 'Services')}
    primaryButtonUrl={text('primaryButtonUrl', '/')}
    secondaryButtonLabel={text('secondaryButtonLabel', 'Features')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/')}
    tertiaryButtonLabel={text('tertiaryButtonLabel', 'About')}
    tertiaryButtonUrl={text('tertiaryButtonUrl', '/')}
    quaternaryButtonLabel={text('quaternaryButtonLabel', 'Terms')}
    quaternaryButtonUrl={text('quaternaryButtonUrl', '/')}
    quinaryButtonLabel={text('quinaryButtonLabel', 'Contact Us')}
    quinaryButtonUrl={text('quinaryButtonUrl', '/')}
    reverse={boolean('reverse', false)}
  />
);

sockets1.story = { name: 'Sockets1' };
sockets2.story = { name: 'Sockets2' };
sockets3.story = { name: 'Sockets3' };
sockets4.story = { name: 'Sockets4' };
