import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import Contents1 from './1';
import Contents2 from './2';
import Contents3 from './3';
import Contents4 from './4';
import Contents5 from './5';
import Contents6 from './6';
import Contents7 from './7';
import Contents8 from './8';
import Contents9 from './9';
import Contents10 from './10';
import Contents11 from './11';
import Contents12 from './12';
import Contents13 from './13';
import Contents14 from './14';
import Contents15 from './15';
import Contents16 from './16';
import Contents17 from './17';
import Contents18 from './18';
import Contents19 from './19';
import Contents20 from './20';
import Contents21 from './21';
import Contents22 from './22';
import Contents23 from './23';
import Contents24 from './24';
import Contents25 from './25';
import Contents26 from './26';
import Contents27 from './27';
import Contents28 from './28';
import Contents29 from './29';
import Contents30 from './30';
import Contents31 from './31';
import Contents32 from './32';
import Contents33 from './33';
import Contents34 from './34';
import Contents35 from './35';
import Contents36 from './36';

export default {
  title: 'Contents',
  decorators: [withKnobs],
};

const textComponents = 'p h1 h2 h3 h4 h5 h6'.split(' ');
const textVariants = 'h1 h2 h3 h4 h5 h6 subtitle1 subtitle2 body1 body2 caption button overline srOnly inherit'.split(' ');
const textColors = 'inherit primary secondary textPrimary textSecondary error'.split(' ');
const textAligns = 'left center right justify'.split(' ');
const buttonColors = 'default inherit primary secondary'.split(' ');
const buttonVariants = 'text outlined contained'.split(' ');
const buttonSize = 'small medium large'.split(' ');

export const contents1 = () => (
  <Contents1
    title={text('title', 'Odduse Design Blocks')}
    titleColor={select('titleColor', textColors, 'textPrimary')}
    titleComponent={select('titleComponent', textComponents, 'h1')}
    titleVariant={select('titleVariant', textVariants, 'h3')}
  />
);

export const contents2 = () => (
  <Contents2
    title={text('title', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, 'p')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
  />
);

export const contents3 = () => (
  <Contents3
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

export const contents4 = () => (
  <Contents4
    title={text('title', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.')}
    titleColor={select('titleColor', textColors, 'textSecondary')}
    titleComponent={select('titleComponent', textComponents, '')}
    titleVariant={select('titleVariant', textVariants, 'subtitle1')}
    reverse={boolean('reverse', false)}
  />
);

export const contents5 = () => (
  <Contents5
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

export const contents6 = () => (
  <Contents6
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

export const contents7 = () => (
  <Contents7
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

export const contents8 = () => (
  <Contents8
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

export const contents9 = () => (
  <Contents9
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

export const contents10 = () => (
  <Contents10
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

export const contents11 = () => (
  <Contents11
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

export const contents12 = () => (
  <Contents12
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

export const contents13 = () => (
  <Contents13
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

export const contents14 = () => (
  <Contents14
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

export const contents15 = () => (
  <Contents15
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

export const contents16 = () => (
  <Contents16
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

export const contents17 = () => (
  <Contents17
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

export const contents18 = () => (
  <Contents18
    title={text('title', 'Design Blocks')}
    subtitle={text('subtitle', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.')}
    content={text('content', 'Works in every browser:')}
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    imageTitle={text('imageTitle', 'Alternative text for image')}
    imageUrl={text('imageUrl', require('../../images/dummy/draws/browsers.svg'))}
  />
);

export const contents19 = () => (
  <Contents19
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const contents20 = () => (
  <Contents20
    title={text('title', 'Odduse Design Blocks')}
    content={text('content', 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove')}
    background={text('background', require('../../images/dummy/shapes/10.svg'))}
    buttonTitle={text('buttonLabel', 'Learn More')}
    buttonUrl={text('buttonLink', '/')}
  />
);

export const contents21 = () => (
  <Contents21
    title={text('title', 'Odduse Design Blocks')}
    content={text('content', 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove')}
    buttonTitle={text('buttonLabel', 'Register')}
    buttonUrl={text('buttonLink', '/')}
  />
);

export const contents22 = () => (
  <Contents22
    title={text('title', 'Odduse Design Blocks')}
    content={text('content', 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies')}
    caption={text('caption', 'Latest Version: 2.3.5')}
    buttonTitle={text('buttonLabel', 'Download Now')}
    buttonUrl={text('buttonLink', '/')}
    imageTitle={text('imageTitle', 'Alternative text for image')}
    imageUrl={text('imageUrl', require('../../images/dummy/logo.png'))}
  />
);

export const contents23 = () => (
  <Contents23
    title={text('title', 'Design Blocks')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts')}
    primaryImageTitle={text('primaryImageTitle', 'Alternative text for image')}
    primaryImageUrl={text('primaryImageUrl', require('../../images/dummy/draws/iphone-hand.svg'))}
    secondaryImageTitle={text('secondaryImageTitle', 'Alternative text for image')}
    secondaryImageUrl={text('secondaryImageUrl', require('../../images/dummy/icons/gift.svg'))}
    primaryButtonTitle={text('primaryButtonLabel', 'Download')}
    primaryButtonUrl={text('primaryButtonLink', '/')}
    secondaryButtonTitle={text('secondaryButtonLabel', 'Register')}
    secondaryButtonUrl={text('secondaryButtonLink', '/')}
  />
);

export const contents24 = () => (
  <Contents24
    title={text('title', 'Design Blocks')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts')}
    imageTitle={text('imageTitle', 'Alternative text for image')}
    imageUrl={text('imageUrl', require('../../images/dummy/draws/customer-survey.svg'))}
  />
);

export const contents25 = () => (
  <Contents25
    title={text('title', 'Odduse Design Blocks is Open Source and free to use')}
    imageTitle={text('imageTitle', 'Alternative text for image')}
    imageUrl={text('imageUrl', require('../../images/dummy/draws/android.svg'))}
  />
);

export const contents26 = () => (
  <Contents26
    title={text('title', 'Odduse Blocks')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts')}
    background={text('background', require('../../images/dummy/people/5.jpg'))}
    buttonTitle={text('buttonTitle', 'Learn More')}
    buttonUrl={text('buttonUrl', '/')}
  />
);

export const contents27 = () => (
  <Contents27
    title={text('title', 'Odduse Blocks')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.')}
    caption={text('caption', 'Follow us on')}
    background={text('background', require('../../images/dummy/people/6.jpg'))}
    buttonTitle={text('buttonTitle', 'Button')}
    buttonUrl={text('buttonUrl', '/')}
  />
);

export const contents28 = () => (
  <Contents28
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.')}
  />
);

export const contents29 = () => (
  <Contents29
    title={text('title', 'Design Blocks')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.')}
  />
);

export const contents30 = () => (
  <Contents30
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const contents31 = () => (
  <Contents31
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const contents32 = () => (
  <Contents32
    buttonTitle={text('buttonLabel', 'Download')}
    buttonUrl={text('buttonLink', '/')}
    content={text('children', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
  />
);

export const contents33 = () => (
  <Contents33
    title={text('title', 'Design Blocks')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics')}
    background={text('background', require('../../images/dummy/shapes/9.svg'))}
    buttonTitle={text('buttonTitle', 'Read More')}
    buttonUrl={text('buttonLink', '/')}
  />
);

export const contents34 = () => (
  <Contents34
  title={text('title', 'Design Blocks')}
  content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics')}
  background={text('background', require('../../images/dummy/shapes/9.svg'))}
  buttonTitle={text('buttonTitle', 'Read More')}
  buttonUrl={text('buttonLink', '/')}
  />
);

export const contents35 = () => (
  <Contents35
    title={text('title', 'Design Blocks')}
    content={text('content', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics')}
    background={text('background', require('../../images/dummy/hero/purple.svg'))}
    buttonTitle={text('buttonTitle', 'Read More')}
    buttonUrl={text('buttonLink', '/')}
  />
);

export const contents36 = () => (
  <Contents36
    title={text('title', 'Design Blocks')}
    subtitle={text('subtitle', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.')}
    imageTitle={text('imageTitle', 'Alternative text for image')}
    imageUrl={text('imageUrl', require('../../images/dummy/draws/opened.svg'))}
    primaryHeadline={text('primaryHeadline', 'Open Source')}
    primaryContent={text('primaryContent', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.')}
    secondaryHeadline={text('secondaryHeadline', 'Bootstrap')}
    secondaryContent={text('secondaryContent', 'Right at the coast of the Semantics, a large language ocean. A small river named Duden.')}
  />

);

contents1.story = { name: 'Contents1' };
contents2.story = { name: 'Contents2' };
contents3.story = { name: 'Contents3' };
contents4.story = { name: 'Contents4' };
contents5.story = { name: 'Contents5' };
contents6.story = { name: 'Contents6' };
contents7.story = { name: 'Contents7' };
contents8.story = { name: 'Contents8' };
contents9.story = { name: 'Contents9' };
contents10.story = { name: 'Contents10' };
contents11.story = { name: 'Contents11' };
contents12.story = { name: 'Contents12' };
contents13.story = { name: 'Contents13' };
contents14.story = { name: 'Contents14' };
contents15.story = { name: 'Contents15' };
contents16.story = { name: 'Contents16' };
contents17.story = { name: 'Contents17' };
contents18.story = { name: 'Contents18' };
contents19.story = { name: 'Contents19' };
contents20.story = { name: 'Contents20' };
contents21.story = { name: 'Contents21' };
contents22.story = { name: 'Contents22' };
contents23.story = { name: 'Contents23' };
contents24.story = { name: 'Contents24' };
contents25.story = { name: 'Contents25' };
contents26.story = { name: 'Contents26' };
contents27.story = { name: 'Contents27' };
contents28.story = { name: 'Contents28' };
contents29.story = { name: 'Contents29' };
contents30.story = { name: 'Contents30' };
contents31.story = { name: 'Contents31' };
contents32.story = { name: 'Contents32' };
contents33.story = { name: 'Contents33' };
contents34.story = { name: 'Contents34' };
contents35.story = { name: 'Contents35' };
contents36.story = { name: 'Contents36' };
