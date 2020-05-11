import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import Footers1 from './1';
import Footers4 from './4';
import Footers5 from './5';
import Footers6 from './6';
import Footers7 from './7';
import Footers8 from './8';
import Footers9 from './9';
import Footers10 from './10';
import Footers11 from './11';
import Footers12 from './12';

export default {
  title: 'Footers',
  decorators: [withKnobs],
};

const textComponents = 'p h1 h2 h3 h4 h5 h6'.split(' ');
const textVariants = 'h1 h2 h3 h4 h5 h6 subtitle1 subtitle2 body1 body2 caption button overline srOnly inherit'.split(' ');
const textColors = 'inherit primary secondary textPrimary textSecondary error'.split(' ');
const textAligns = 'left center right justify'.split(' ');
const buttonColors = 'default inherit primary secondary'.split(' ');
const buttonVariants = 'text outlined contained'.split(' ');
const buttonSize = 'small medium large'.split(' ');

export const footers1 = () => (
  <Footers1
    title={text('title', '© 2018 Froala. All Rights Reserved')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
  />
);

export const footers4 = () => (
  <Footers4
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const footers5 = () => (
  <Footers5
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const footers6 = () => (
  <Footers6
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const footers7 = () => (
  <Footers7
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const footers8 = () => (
  <Footers8
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const footers9 = () => (
  <Footers9
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.')}
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
  />
);

export const footers10 = () => (
  <Footers10
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const footers11 = () => (
  <Footers11
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const footers12 = () => (
  <Footers12
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

footers1.story = { name: 'Footers1' };
footers4.story = { name: 'Footers4' };
footers5.story = { name: 'Footers5' };
footers6.story = { name: 'Footers6' };
footers7.story = { name: 'Footers7' };
footers8.story = { name: 'Footers8' };
footers9.story = { name: 'Footers9' };
footers10.story = { name: 'Footers10' };
footers11.story = { name: 'Footers11' };
footers12.story = { name: 'Footers12' };
