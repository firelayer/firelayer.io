---
title: Setting Up Firebase
description: Steps to configure Firebase to work with Firelayer
---

**Guide on how to ready up a new Firebase project for Firelayer.**

Resume video guide for the instructions bellow:

<div class="video">
  <iframe src="https://www.youtube.com/embed/cw1h0GfVEqQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 1. Create a project
Open the <a href="https://console.firebase.google.com" target="_blank">Firebase Console</a> and create a new project.

## 2. Setup Authentication Methods
We will need to sign up new users in our application so we are going to enable the email / password basic authentication method.
1. Click on **Authentication** on the Navigation menu under **Develop**
2. Click "Set up sign-in method"
3. Enable Email/Password provider

## 3. Setup Realtime Database and Firestore
To persist the data of our applications we have at our disposal two databases, very easy to setup.

1. Click on **Database** on the Navigation menu under **Develop**
2. Click "Create Database" and select the region where you want your to store your databases and storage bucket. <a href="https://firebase.google.com/docs/projects/locations" target="_blank">More on regions here.</a>

## 4. Setup Storage
To store files and our backups we will need a storage bucket. So let's create our default one.

1. Click on **Storage** on the Navigation menu under **Develop**
2. Click "Get Started" and follow the prompts.

## 5. Setup Hosting
Firebase also handles your website hosting so to get it started just:

1. Click on **Hosting** on the Navigation menu under **Develop**
2. Click "Get Started" and follow the prompts.

<br>

That creates your default hosting site repository.

### Multiple Sites
If you're starting with the Starter Template (default) you will need **two hosting targets**, two different websites, one for the administration dashboard and other for the landing page website.
To create a second hosting site, click on "Add another site" on the bottom of the page and on the prompt write the name you wish to set your new website.

You will need to define this hosting names on `.firebaserc` once your project is setup:
```sh
#.firebaserc example file for starter template
{
  "projects": {
    "default": "my-new-firelayer"
  },
  "targets": {
    "my-new-firelayer": {
      "hosting": {
        "website": [
          "my-new-firelayer"
        ],
        "admin": [
          "my-new-firelayer-admin"
        ]
      }
    }
  }
}
```

## Service Account Key
If you haven't already follow the step on the [Getting Started - Get the Firebase Service Account key](/docs/getting-started#get-the-firebase-service-account-key) so your Cloud Functions and Firelayer CLI helpers can work locally.

## Create Web Application (Optional)
Initiating a new project using `firelayer init` will prompt you to create a new web application if you don't have any web application on the project you selected.

You can create it now in the Firebase Console while you are there and then select it on `firelayer init`.

## All set

After all these steps we are all set to start our Firelayer project `firelayer init mynewproject`
