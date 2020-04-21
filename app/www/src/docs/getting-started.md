---
title: Getting Started
description: Starting a project with Firelayer
---

#### System Requirements
- [Node.js 10.13 or later](https://nodejs.org/)
- [Firebase CLI](https://firebase.google.com/docs/cli?#mac-linux-npm)

<br>

If you haven't already, sign in with your Firebase CLI: `firebase init`

## Setup

We recomment creating a new Firelayer app using `@firelayer/cli`, which sets up everything automatically for you. To get the CLI, run:

```sh
npm i -g @firelayer/cli
```

#### Create a new project

With the following command, firelayer will copy the boilerplate and install it's dependencies.

```sh
firelayer init new-project
```

#### Change directories into project folder
<br>

```sh
cd new-project
```

#### Start the development servers
<br>

```sh
yarn dev
```

#### Create a production build
<br>

```sh
yarn build
```

#### Deploy into Firebase
<br>

```sh
yarn deploy
```
