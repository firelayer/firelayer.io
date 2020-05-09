---
title: Starter Template
description: Firelayer Default Starter Template
---

**Follow the guide on preparing a Firebase project for Firelayer**
### [Setting up Firebase - Guide](/docs/setting-up-firebase)

## Content

### Cloud Functions `apps/functions`
- Express API
- User management
- Triggers examples
- Scheduled jobs examples

### Administration Dashboard `apps/admin`
- Firebase Users Management
- Send auth emails with SendGrid
- Vue & Vuetify Components

### Landing Page `apps/website`
- Sign In, register, verify email and reset password
- User Dashboard
- Localization
- Vue with Nuxt & Vuetify Components

## Installing

```sh
firelayer init myproject -t starter
# or add to an existing Firelayer project
firelayer add:template starter
```

## Developing

To start run **`yarn dev`** or **`npm run dev`** and the three applications should be ready on:
- Admin - http://localhost:8081
- Website - http://localhost:8080
- Functions - http://localhost:5000/api/api
(ports may change if already in use by other services)

You can run each separately by running:
- `yarn dev:admin` or `npm run dev:admin`
- `yarn dev:website` or `npm run dev:website`
- `yarn dev:functions` or `npm run dev:functions`

### Adding an Administrator
1. Follow the steps on [Getting Started to add a Service Account key](https://firelayer.io/docs/getting-started#get-the-firebase-service-account-key) to your project so you can run Firelayer CLI helpers.

2. If you don't have any users on this Firebase Project you can always create a new one using the Landing Page on http://localhost:8080 (if not running: `yarn dev:website`) or on the <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a>.

3. Add Administration privileges to user:
```sh
firelayer auth -u emailofuser@example.com --set-admin
```

<br>

And now you can login on the administration dashboard - http://localhost:8081 (if not running: `yarn dev` )

## Deploying

#### Deploy Hosting and Cloud Functions
To deploy all applications and hosting run:
```sh
yarn deploy
# or if you use NPM
npm run deploy
```

#### Deploy Cloud Functions Environment Variables
To deploy cloud functions environment variables run:
```sh
firelayer deploy:env
```

## Maintenance

Step needed: [Getting Started - Get the Firebase Service Account key](/docs/getting-started#get-the-firebase-service-account-key) so your Cloud Functions and Firelayer CLI helpers can work locally.

To put the Users dashboard on maintenance mode:
```sh
firelayer down
```

<br>

To get out of maintenance mode:
```sh
firelayer up
```
