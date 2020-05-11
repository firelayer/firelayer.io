---
title: Configuration
description: Configuring Firelayer
---

## Introduction

All of the configuration files for Firelayer are stored in the `config` directory.

If they don't exist already, start by copying all the `*.dist.json` files and rename to `*.json` in their respective folder and fill out with the respective configurations content:

### > `config/keys/key.json`
It's the service account key downloaded from the <a href="https://console.firebase.google.com/u/0/project/firelayer-boilerplate/settings/serviceaccounts/adminsdk" target="_blank">firebase console</a> which will allow access the Admin SDK functionalities for the Firelayer CLI and for `apps/functions` local development.

### > `config/app.json`
This is the global configuration file, all applications will receive these configs. A good example of what to inject into all the applications would be the Firebase config.

### > `config/{folder}/env.json`
Each folder contains the configuration file for the respective `apps/{folder}` application. Configurations set in these files will ovewrite `config/app.json` properties (when the keys are the same).


## Using

The configurations are intended to be used with the help of the command `firelayer run` which will inject all the configurations into `process.env`

So when running `firelayer run "node index.js"` it will inject all the configurations into `process.env`, like so:
```js
// will create a key for each app in apps/{folder}

// stringified version of config files

// config/admin/env.json + config/app.json
process.env.admin = '{"firebase": {"projectId": "new-firebase-project"}}'
// config/functions/env.json + config/app.json
process.env.functions = '{"firebase": {"projectId": "new-firebase-project"}}'

// config/app.json is injected in all applications
// because is the global configuration file for the project

// and the path for the the Service Account key
process.env.GOOGLE_APPLICATION_CREDENTIALS = '..../config/keys/key.json'
// so it can be used in the initialization of the Firebase Admin SDK
// like so: admin.credential.applicationDefault()
```

<!-- ## Multiple Environments (projects) -->
