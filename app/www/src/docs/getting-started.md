---
title: Getting Started
description: Starting a project with Firelayer
---

#### System Requirements
- [Node.js 10.13 or later](https://nodejs.org/)
- [Firebase CLI 8 or later](https://firebase.google.com/docs/cli?#mac-linux-npm)


#### If you haven't already:
- Sign in with your Firebase CLI: `firebase login`
- Create a Firebase project **with a Web Application** to use in our Firelayer project

## Setup

We recomment creating a new Firelayer project using `@firelayer/cli`, which does the initial project setup automatically for you. To get the CLI, run:

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

#### Get the Firebase Service Account key
In order to use the Admin SDK in our Firebase Cloud Functions we will need the service account key. [More information here.](https://firebase.google.com/docs/admin/setup#initialize-sdk)

To generate a private key file for your service account:
1. In the Firebase console, open **Settings > [Service Accounts](https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk)**.
2. Click Generate New Private Key, then confirm by clicking Generate Key.
3. Securely store the JSON file in the folder `config/keys` as `key.json`
4. Check `config/keys/key.json` **Important!** Do not share or distribute this key, must remain private.


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
