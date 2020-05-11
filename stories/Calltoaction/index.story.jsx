import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import Calltoactions1 from './1';
import Calltoactions2 from './2';
import Calltoactions3 from './3';
import Calltoactions4 from './4';
import Calltoactions5 from './5';
import Calltoactions6 from './6';
import Calltoactions7 from './7';
import Calltoactions8 from './8';
import Calltoactions9 from './9';
import Calltoactions10 from './10';
import Calltoactions11 from './11';
import Calltoactions12 from './12';
import Calltoactions13 from './13';
import Calltoactions14 from './14';
import Calltoactions15 from './15';
import Calltoactions16 from './16';
import Calltoactions17 from './17';
import Calltoactions18 from './18';
import Calltoactions19 from './19';
import Calltoactions20 from './20';
import Calltoactions21 from './21';
import Calltoactions22 from './22';

export default {
  title: 'Calltoactions',
  decorators: [withKnobs],
};

const textComponents = 'p h1 h2 h3 h4 h5 h6'.split(' ');
const textVariants = 'h1 h2 h3 h4 h5 h6 subtitle1 subtitle2 body1 body2 caption button overline srOnly inherit'.split(' ');
const textColors = 'inherit primary secondary textPrimary textSecondary error'.split(' ');
const textAligns = 'left center right justify'.split(' ');
const buttonColors = 'default inherit primary secondary'.split(' ');
const buttonVariants = 'text outlined contained'.split(' ');
const buttonSize = 'small medium large'.split(' ');

export const calltoactions1 = () => (
  <Calltoactions1
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h3')}
  />
);

export const calltoactions2 = () => (
  <Calltoactions2
    title={text('title', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
  />
);

export const calltoactions3 = () => (
  <Calltoactions3
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, '')}
    titleVariant={select('titleVariant', textVariants, 'h3')}
    content={text('content', 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentComponent={select('contentComponent', textComponents, 'p')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    textAlign={select('textAlign', textAligns, 'center')}
  />
);

export const calltoactions4 = () => (
  <Calltoactions4
    title={text('title', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, '')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
    reverse={boolean('reverse', false)}
  />
);

export const calltoactions5 = () => (
  <Calltoactions5
    title={text('title', 'Far far away...')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentComponent={select('contentComponent', textComponents, 'p')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    textAlign={select('textAlign', textAligns, 'left')}
  />
);

export const calltoactions6 = () => (
  <Calltoactions6
    title={text('title', 'Far far away...')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h3')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentComponent={select('contentComponent', textComponents, 'p')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
  />
);

export const calltoactions7 = () => (
  <Calltoactions7
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place far far away.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/hosting.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    primaryButtonLabel={text('primaryButtonLabel', 'Buy Now')}
    primaryButtonUrl={text('primaryButtonUrl', '/primary')}
    primaryButtonColor={select('primaryButtonColor', buttonColors, 'primary')}
    primaryButtonVariant={select('primaryButtonVariant', buttonVariants, 'contained')}
    primaryButtonSize={select('primaryButtonSize', buttonSize, 'medium')}
    secondaryButtonLabel={text('secondaryButtonLabel', 'Learn More')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/secondary')}
    secondaryButtonColor={select('secondaryButtonColor', buttonColors, 'default')}
    secondaryButtonVariant={select('secondaryButtonVariant', buttonVariants, 'outlined')}
    secondaryButtonSize={select('secondaryButtonSize', buttonSize, 'medium')}
    textAlign={select('textAlign', textAligns, 'center')}
  />
);

export const calltoactions8 = () => (
  <Calltoactions8
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Subtitle text about launch comes here.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/developer.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    secondaryImageUrl={text('secondaryImageUrl', require('../../images/dummy/draws/git.svg'))}
    secondaryImageAlt={text('secondaryImageAlt', 'Alternative text for image')}
    primaryButtonUrl={text('primaryButtonUrl', '/primary')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/secondary')}
    textAlign={select('textAlign', textAligns, 'center')}
  />
);

export const calltoactions9 = () => (
  <Calltoactions9
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Subtitle text about launch comes here.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/design-life.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    secondaryImageUrl={text('secondaryImageUrl', require('../../images/dummy/draws/designer.svg'))}
    secondaryImageAlt={text('secondaryImageAlt', 'Alternative text for image')}
    tertiaryImageUrl={text('tertiaryImageUrl', require('../../images/dummy/draws/design-community.svg'))}
    tertiaryImageAlt={text('tertiaryImageAlt', 'Alternative text for image')}
    primaryButtonUrl={text('primaryButtonUrl', '/primary')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/secondary')}
    tertiaryButtonUrl={text('tertiaryButtonUrl', '/tertiary')}
    textAlign={select('textAlign', textAligns, 'center')}
  />
);

export const calltoactions10 = () => (
  <Calltoactions10
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Subtitle text about launch comes here.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/shapes/1.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    secondaryImageUrl={text('secondaryImageUrl', require('../../images/dummy/shapes/5.svg'))}
    secondaryImageAlt={text('secondaryImageAlt', 'Alternative text for image')}
    tertiaryImageUrl={text('tertiaryImageUrl', require('../../images/dummy/shapes/7.svg'))}
    tertiaryImageAlt={text('tertiaryImageAlt', 'Alternative text for image')}
    quaternaryImageUrl={text('quaternaryImageUrl', require('../../images/dummy/shapes/4.svg'))}
    quaternaryImageAlt={text('quaternaryImageAlt', 'Alternative text for image')}
    primaryButtonUrl={text('primaryButtonUrl', '/primary')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/secondary')}
    tertiaryButtonUrl={text('tertiaryButtonUrl', '/tertiary')}
    quaternaryButtonUrl={text('tertiaryButtonUrl', '/quaternary')}
    textAlign={select('textAlign', textAligns, 'center')}
  />
);

export const calltoactions11 = () => (
  <Calltoactions11
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/shapes/2.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    textAlign={select('textAlign', textAligns, 'left')}
    reverse={boolean('reverse', false)}
  />
);

export const calltoactions12 = () => (
  <Calltoactions12
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/icons/gift.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    textAlign={select('textAlign', textAligns, 'center')}
  />
);

export const calltoactions13 = () => (
  <Calltoactions13
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/smile.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    primaryButtonLabel={text('primaryButtonLabel', 'Download')}
    primaryButtonUrl={text('primaryButtonUrl', '/')}
    primaryButtonColor={select('buttonColor', buttonColors, 'default')}
    primaryButtonVariant={select('buttonVariant', buttonVariants, 'contained')}
    primaryButtonSize={select('buttonSize', buttonSize, 'medium')}
    reverse={boolean('reverse', false)}
  />
);

export const calltoactions14 = () => (
  <Calltoactions14
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/chat.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    secondaryImageUrl={text('secondaryImageUrl', require('../../images/dummy/icons/github.svg'))}
    secondaryImageAlt={text('secondaryImageAlt', 'Alternative text for image')}
    primaryButtonLabel={text('primaryButtonLabel', 'Download')}
    primaryButtonUrl={text('primaryButtonUrl', '/')}
    reverse={boolean('reverse', false)}
    backgroundImageUrl={text('backgroundImageUrl', require('../../images/dummy/shapes/8.svg'))}
  />
);

export const calltoactions15 = () => (
  <Calltoactions15
    title={text('title', 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
    textAlign={select('textAlign', textAligns, 'center')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/icons/layers.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    secondaryImageUrl={text('secondaryImageUrl', require('../../images/dummy/icons/map.svg'))}
    secondaryImageAlt={text('secondaryImageAlt', 'Alternative text for image')}
    tertiaryImageUrl={text('tertiaryImageUrl', require('../../images/dummy/icons/monitor.svg'))}
    tertiaryImageAlt={text('tertiaryImageAlt', 'Alternative text for image')}
  />
);

export const calltoactions16 = () => (
  <Calltoactions16
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/chatting.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    primaryButtonLabel={text('primaryButtonLabel', 'Download')}
    primaryButtonUrl={text('primaryButtonUrl', '/')}
    reverse={boolean('reverse', false)}
  />
);

export const calltoactions17 = () => (
  <Calltoactions17
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h4')}
    content={text('content', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.')}
    contentColor={select('contentColor', textColors, 'textSecondary')}
    contentVariant={select('contentVariant', textVariants, 'subtitle1')}
    caption={text('caption', 'Works in every browser:')}
    captionColor={select('captionColor', textColors, 'textSecondary')}
    captionVariant={select('captionVariant', textVariants, 'caption')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/browsers.svg'))}
    primaryImageAlt={text('primaryImageAlt', 'Alternative text for image')}
    primaryButtonUrl={text('primaryButtonUrl', '/primary')}
    secondaryButtonUrl={text('secondaryButtonUrl', '/secondary')}
    tertiaryButtonUrl={text('tertiaryButtonUrl', '/tertiary')}
    quaternaryButtonUrl={text('quaternaryButtonUrl', '/quaternary')}
    reverse={boolean('reverse', false)}
  />
);

export const calltoactions18 = () => (
  <Calltoactions18
    title={text('title', 'Design Blocks')}
    subtitle={text('subtitle', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.')}
    content={text('content', 'Works in every browser:')}
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    imageTitle={text('imageTitle', 'Alternative text for image')}
    imageUrl={text('imageUrl', require('../../images/dummy/draws/browsers.svg'))}
  />
);

export const calltoactions19 = () => (
  <Calltoactions19
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const calltoactions20 = () => (
  <Calltoactions20
    title={text('title', 'Odduse Design Blocks')}
    content={text('content', 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove')}
    background={text('background', require('../../images/dummy/shapes/10.svg'))}
    buttonTitle={text('buttonLabel', 'Learn More')}
    buttonUrl={text('buttonLink', '/')}
  />
);

export const calltoactions21 = () => (
  <Calltoactions21
    title={text('title', 'Odduse Design Blocks')}
    content={text('content', 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove')}
    buttonTitle={text('buttonLabel', 'Register')}
    buttonUrl={text('buttonLink', '/')}
  />
);

export const calltoactions22 = () => (
  <Calltoactions22
    title={text('title', 'Odduse Design Blocks')}
    content={text('content', 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies')}
    caption={text('caption', 'Latest Version: 2.3.5')}
    buttonTitle={text('buttonLabel', 'Download Now')}
    buttonUrl={text('buttonLink', '/')}
    imageTitle={text('imageTitle', 'Alternative text for image')}
    imageUrl={text('imageUrl', require('../../images/dummy/logo.png'))}
  />
);

calltoactions1.story = { name: 'Calltoactions1' };
calltoactions2.story = { name: 'Calltoactions2' };
calltoactions3.story = { name: 'Calltoactions3' };
calltoactions4.story = { name: 'Calltoactions4' };
calltoactions5.story = { name: 'Calltoactions5' };
calltoactions6.story = { name: 'Calltoactions6' };
calltoactions7.story = { name: 'Calltoactions7' };
calltoactions8.story = { name: 'Calltoactions8' };
calltoactions9.story = { name: 'Calltoactions9' };
calltoactions10.story = { name: 'Calltoactions10' };
calltoactions11.story = { name: 'Calltoactions11' };
calltoactions12.story = { name: 'Calltoactions12' };
calltoactions13.story = { name: 'Calltoactions13' };
calltoactions14.story = { name: 'Calltoactions14' };
calltoactions15.story = { name: 'Calltoactions15' };
calltoactions16.story = { name: 'Calltoactions16' };
calltoactions17.story = { name: 'Calltoactions17' };
calltoactions18.story = { name: 'Calltoactions18' };
calltoactions19.story = { name: 'Calltoactions19' };
calltoactions20.story = { name: 'Calltoactions20' };
calltoactions21.story = { name: 'Calltoactions21' };
calltoactions22.story = { name: 'Calltoactions22' };
