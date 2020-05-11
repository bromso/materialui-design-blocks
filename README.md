# MaterilUI Design Blocks
A set of 170+ MaterialUI based design blocks ready to be used to create clean modern websites.

## Inspiration
- [Froala Design Blocks](https://github.com/froala/design-blocks)
- [TailwindUI](https://tailwindui.com/)
- [Tailwind Builder](https://tailwind.build/)
- [MD Bootstrap Design Blocks](https://mdbootstrap.com/docs/jquery/design-blocks/)
- [BlocksUI](https://blocks-ui.com/)

## Dependencies
You're recommended to have these CLI and dependencies in order to download and install everything without a clitch.

| Logo                                                                  | Name                                    |
|-----------------------------------------------------------------------|-----------------------------------------|
| ![Homebrew Logo](https://brew.sh/assets/img/homebrew-256x256.png)     | [Homebrew](https://brew.sh/)            |
|                                                                       | [NVM](https://github.com/nvm-sh/nvm)    |
| ![NodeJS Logo](https://cdn.svgporn.com/logos/nodejs-icon.svg)         | [NodeJS](https://nodejs.org/)           |
| ![Yarn Logo](https://cdn.svgporn.com/logos/yarn.svg)                  | [Yarn](https://yarnpkg.com/)            |
| ![StorybookJS Logo](https://cdn.svgporn.com/logos/storybook-icon.svg) | [StorybookJS](https://storybook.js.org/)|

## Quick start

### Download
Navigate the a directory on your computer were you are working on sites and run this command:
```shell
git clone https://github.com/bromso/materialui-design-blocks.git
```

### Install packages
Navigate the site’s directory and run this command.
```shell
yarn
```

### Start developing
Navigate the site’s directory and start it up.
```shell
yarn storybook
```

### Local --> Stage --> Production

| Name        | Local                            | URL                         |
|-------------|----------------------------------|-----------------------------|
| Website     | http://localhost:6006            | https://www.link.com/       |

## Contribution

### Semantic Versioning (Semver)

For transparency into our release cycle and in striving to maintain backward compatibility, MaterialUI is maintained under the [Semantic Versioning guidelines](https://semver.org). Sometimes we screw up, but we adhere to those rules whenever possible.

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

```sh
$ git commit -m "A brief summary of the commit
>
> A paragraph describing what changed and its impact."
```

| Type            | Explanation                                                    | Semver (eg. 1.0.0) | Git Message Example                              |
|-----------------|----------------------------------------------------------------|--------------------|--------------------------------------------------|
| fix             | A bug fix                                                      | x.x.1              | fix: update package.json                         |
| feat            | A new feature                                                  | x.1.x              | feat: add new eslint to package.json             |
| BREAKING CHANGE | A major change                                                 | 1.x.x              | BREAKING CHANGE: upgrade to strapi 3 & gatsby 3  |
| docs            | Documentation improvements                                     |                    | docs: update README.md                           |
| style           | Changes made white-space, formatting, missing semi-colons, etc |                    | style: add styles in breadcrumb component        |
| refactor        | A code change that neither fixes a bug nor adds a feature      |                    | refactor: fixed better intendation in index.html |
| perf            | Performance improvements                                       |                    | perf: add tree-shaking to webpack                |
| test            | Add missing tests                                              |                    | test: add test to .travis.yml                    |
| chore           | Changes the build process                                      |                    | chore: update .travis.yml & netlify.toml         |


See the Releases section of our GitHub project for CHANGELOG for each release version of MaterialUI projects.

### Editor preferences
Editor preferences are available in the editor config file for easy use in common text editors. Read more and download plugins at [Editorconfig](https://editorconfig.org/).

## Coding conventions

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

## Copyright and license
This project is licensed under the terms of the MIT license.

For more information, [click here](https://github.com/).
