# Create Koa TS App

> A boilerplate to create koa app with typescript

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
