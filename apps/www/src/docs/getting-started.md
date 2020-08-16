---
title: Getting Started
description: Starting a project with Firelayer
---

#### System Requirements
- <a href="https://nodejs.org" target="_blank">Node.js 10.13 or later</a>
- <a href="https://git-scm.com/" target="_blank">Git</a>

#### Keep in mind:
- You can use an existing Firebase project or create a new project on <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a>

### [Setting up Firebase - Guide](/docs/setting-up-firebase)
**Follow the guide on preparing a Firebase project for Firelayer**

## Setup

We recommend creating a new Firelayer project using `@firelayer/cli`, which does the initial project setup automatically for you. To get the CLI, run:

```sh
npm i -g @firelayer/cli
```

#### Create a new project

With the following command, firelayer will copy the boilerplate and install its dependencies.

```sh
firelayer init new-project
```

#### Change directories into project folder
<br>

```sh
cd new-project
```

#### Get the Firebase Service Account key
In order to use the Admin SDK in our Firebase Cloud Functions a service account key is needed. <a href="https://firebase.google.com/docs/admin/setup#initialize-sdk" target="_blank">More information here.</a>

To generate a private key file for your service account:
1. In the Firebase console, open **Settings &gt; <a href="https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk" target="_blank">Service Accounts</a>**.
2. Click Generate New Private Key, then confirm by clicking Generate Key.
3. Securely store the JSON file in the folder `config/keys`
4. Rename the key file to `key.json` (replace the default `key.json` file if it exists)
5. Check if the path is correct: `config/keys/key.json` **Important!** Do not share or distribute this key, it must remain private.
<br>

<div class="video">
  <iframe src="https://www.youtube.com/embed/w37DtOsYe94" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

#### Start the development servers
<br>

```sh
yarn dev
# or for npm 
npm run dev
```

#### Create a production build
<br>

```sh
yarn build
# or for npm 
npm run build
```

#### Deploy into Firebase
<br>

```sh
yarn deploy
# or for npm 
npm run deploy
```
