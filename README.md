# Create Koa TS App

[![npm version](https://img.shields.io/npm/v/create-koa-ts-app.svg)](https://www.npmjs.com/package/create-koa-ts-app) [![license](https://img.shields.io/github/license/zsjie/create-koa-ts-app.svg)](https://github.com/zsjie/create-koa-ts-app/blob/master/LICENSE)

> A boilerplate to create koa app with typescript

<p align='center'>
  <img src='https://github.com/zsjie/create-koa-ts-app/blob/master/assets/create-koa-ts-app%20demo.gif?raw=true' width='600' alt=''>
</p>

## Features

- ✅ latest Koa version: 2.15.3
- ✅ laster Typescript version: 5.4.5
- ✅ use eslint flat config
- ✅ auto-fixed and auto-formatting on save

## Table of contents

* [Requirements](#requirements)
* [Installation](#Installation)
* [Usage](#usage)
* [Project structure](#project-structure)
* [License](#license)

## Requirements

* [Nodejs](https://nodejs.org/) 14 or later
* [Yarn](https://yarnpkg.com/)

## Installation

```bash
yarn global add create-koa-ts-app
```

## Usage

### Installed Globally

```bash
create-koa-ts-app <project-name>
```

### yarn

```bash
yarn create koa-ts-app <project-name>
```

### npx

```bash
npx create-koa-ts-app <project-name>
```

## Project structure

```txt
<project-name>
├── node_modules
├── src
│   ├── @types
│   ├── api
│   │   ├── greeting.ts
│   │   └── index.ts
│   ├── app.ts
│   ├── index.ts
│   └── lib
│       └── route.ts
├── tsconfig.json
├── package.json
├── yarn.lock
├── dev.sh
├── LICENSE
└── README.md
```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/zsjie/create-koa-ts-app/blob/master/LICENSE) file for details.
