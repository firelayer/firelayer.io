---
title: Board Template - Documentation
description: Firelayer Board Page Template built with Vue and Realtime database
keywords: board, suggestions, vue, vuetify, realtime database, firebase database
---

**Follow the guide on preparing a Firebase project for Firelayer**
### [Setting up Firebase - Guide](/docs/setting-up-firebase)

## Content

### Board Page `apps/board`
- Sign In with Google and Anonymous
- Realtime suggestion board
- Vue with Vuetify Components

## Installing

```sh
firelayer init myproject -t board
# or add to an existing Firelayer project
firelayer add:template board
```

<br>

Don't forget to **verify hosting properties** in `firebase.json` and targets on `.firebaserc` after adding a template. <a href="https://firebase.google.com/docs/cli/targets" target="_blank">More on firebase hosting targets here</a>

#### Install dependencies
`yarn bootstrap` or for NPM `npm run bootstrap`

## Developing

To start run **`yarn dev`** or **`npm run dev`** and the three applications should be ready on:
- Board - <span class="accent--text">localhost:8082</span>
(ports may change if already in use by other services)

You can run each separately by running:
- `yarn dev:board` or `npm run dev:board`

## Deploying

#### Deploy Hosting and Cloud Functions
To deploy all applications and hosting run:
```sh
yarn deploy
# or if you use NPM
npm run deploy
```

<br>

You can run each separately by running:
- `yarn deploy:board` or `npm run deploy:board`

#### Deploy Cloud Functions Environment Variables
To deploy cloud functions environment variables run:
```sh
firelayer deploy:env
```

## Maintenance

Step needed: [Getting Started - Get the Firebase Service Account key](/docs/getting-started#get-the-firebase-service-account-key) so your Cloud Functions and Firelayer CLI helpers can work locally.

To put the board on maintenance mode:
```sh
firelayer down
```

<br>

To get out of maintenance mode:
```sh
firelayer up
```
