---
title: Directory Structure
description: Main folders and structure logic
---

## Introduction

The default Firelayer project structure is intended to provide a simple starting point for a Firebase web application that can be easily scaled to your needs.

### Aditional Information

This project uses Lerna to handle multiple packages and yarn workspaces to better manage those packages.

## The Root Directory

### The `app` Directory
The app directory contains the two main packages that compose this boilerplate, the landing page website `app/www` and the API on `app/functions`. We'll explore this directory in [more detail here](/docs/directory-structure#the-app-directory-2).

### The `config` Directory
The config directory contains all the project configurations. Read the [configuration page for more information](/docs/configuration).

### The `database` Directory
The database directory contains the project migrations and initial seed files.

### The `rules` Directory
The rules directory contains the rules to be deployed in the Firebase project.
- Firestore rules
- Database rules
- Storage rules
- Storage CORS rules
- Firestore indexes

## The App Directory

### The `app/functions` Directory
This package is a simple example of how to use and integrate an API (ExpressJS) and other Cloud Functions features.

### The `app/www` Directory
This package is a basic landing page with user login and registration. Made with NuxtJS.
