---
title: Multiple Environments
description: Develop and deploy multiple Firebase environments with Firelayer
---

## Introduction
Using multiple environments enables you to try out new things and deploy new features without compromising what is already stable and what your customers are currently using.

The usual approach to the this is having a **Staging** environment were you can develop and test new features without impacting your customers and a second environment **Production**, were you keep the stable features.

So how can we achieve this with Firebase? Firebase doesn't have multiple environments for a single project, but, we can have multiple Firebase projects for our application.

Before continuing, if you're not familiarized with Firelayer different config files, you can [check those here](/docs/configuration).

## Were can Firelayer help?

We can have multiple Firebase projects, but we need an easy way of switching environment variables while developing or going to production, that's were Firelayer can help.

## Starting with `.firebaserc`
For our application we will need two Firebase projects that will represent our **Staging** and **Production** environments:
- **my-project-staging**
- **my-project-production**

Next step would be adding it to our `.firebaserc` file:
This will define which Firebase hosting targets will be used while deploying.

**(Example for Starter Template)**
```json
// .firebaserc
{
  "projects": {
    "default": "my-project-staging", // 'default' key
    "production": "my-project-production"
  },
  "targets": {
    "my-project-staging": {
      "hosting": {
        "website": [
          "my-project-staging" // hosting site for landing page
        ],
        "admin": [
          "my-project-staging-admin" // hosting site created for dashboard
        ]
      }
    },
    "my-project-production": {
      "hosting": {
        "website": [
          "my-project-production"
        ],
        "admin": [
          "my-project-production-admin"
        ]
      }
    }
  }
}
```

## Multiple configuration files

Now, each of these projects have their own environment variables for:
- **Firebase config**
- **Service Account Key**
- **Application variables**

How can we manage multiple environment files?
Every config file will have a **suffix with the name of the environment** we are going to use.

**Example config directory for Starter Template:**
```json
project
└───config
   │   app.json // or app.default.json
   │   app.production.json // app.{environment}.json
   │
   └─── keys
   │       key.json
   │       key.production.json
   │
   └─── functions
   │       env.json
   │       env.production.json
   │
   └─── admin
   │       env.json
   │       env.production.json
   │
   └─── website
           env.json
           env.production.json
```

## Switch between environments

To switch between environments use the command:
```sh
# switch to environment named 'default'
firelayer env default
# switch to environment name 'production'
firelayer env production
```
(These commands will also trigger a `firebase use {environment name}`)

For example, taking the configuration structure above, if we execute the following:
```sh
firelayer env production
```

<br>

Now every command ran by `firelayer run` will have injected in the `process.env` the following variables:
```sh
# Used by Cloud Functions and CLI commands
GOOGLE_APPLICATION_CREDENTIALS=/path/to/project/config/keys/key.production.json

# stringified version of config files
# functions/env.production.json + app.production.json
functions="{...}"

# stringified version of config files
# admin/env.production.json + app.production.json
admin="{...}"

# stringified version of config files
# website/env.production.json + app.production.json
website="{...}"

# app.production.json is injected in all applications
# because is the global configuration file for the project
```
