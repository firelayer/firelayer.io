---
title: Directory Structure
description: Main folders and structure logic
---

## Introduction

The default Firelayer project structure is intended to provide a simple starting point for a Firebase web application that can be easily scaled to your needs.

### Aditional Information

This project uses Lerna to handle multiple packages and yarn workspaces to better manage those packages.

## The Root Directory

### The `apps` Directory
The app directory contains the applications packages that your project uses. For example, the Starter Template is composed by two packages, the Administration Dashboard on `apps/admin` and the Cloud Functions API on `apps/functions`.

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
