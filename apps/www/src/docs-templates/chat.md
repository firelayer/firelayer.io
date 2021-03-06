---
title: Chat Template - Documentation
description: Firelayer Chat Page Template built with Vue and Realtime database
keywords: chat, slack, vue, vuetify, realtime database, firebase database, firebase chat
---

**Follow the guide on preparing a Firebase project for Firelayer**
### [Setting up Firebase - Guide](/docs/setting-up-firebase)

## Content

### Chat Page `apps/chat`
- Sign In with Google and Anonymous
- Slack like chat for Firebase Realtime
- Vue with Vuetify Components

## Installing

```sh
firelayer init myproject -t chat
# or add to an existing Firelayer project
firelayer add:template chat
```

<br>

Don't forget to **verify hosting properties** in `firebase.json` and targets on `.firebaserc` after adding a template. <a href="https://firebase.google.com/docs/cli/targets" target="_blank">More on firebase hosting targets here</a>

#### Install dependencies
`yarn bootstrap` or for NPM `npm run bootstrap`

## Developing

To start run **`yarn dev`** or **`npm run dev`** and the three applications should be ready on:
- Chat - <span class="accent--text">localhost:8083</span>
(ports may change if already in use by other services)

You can run each separately by running:
- `yarn dev:chat` or `npm run dev:chat`

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
- `yarn deploy:chat` or `npm run deploy:chat`

#### Deploy Cloud Functions Environment Variables
To deploy cloud functions environment variables run:
```sh
firelayer deploy:env
```

## Maintenance

Step needed: [Getting Started - Get the Firebase Service Account key](/docs/getting-started#get-the-firebase-service-account-key) so your Cloud Functions and Firelayer CLI helpers can work locally.

To put the chat on maintenance mode:
```sh
firelayer down
```

<br>

To get out of maintenance mode:
```sh
firelayer up
```
