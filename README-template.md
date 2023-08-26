# Eqaim - SASS feedback app solution

The candidate needs to update this file

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Steps](#steps)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete SASS feedback requests
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a SASS feedback request
- Upvote SASS feedback requests
- Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Steps
- Write down the detailed steps here

# Connecting to MongoDB
- First create a MongoDb atlas account.
- Deploy a free cluster.
- Create Access credentions
- Create a Database and a collection in that cluster
- Insert the data present in data.json directly, file provided by you.
- After that click on Connect, to connect with cluster
- Click on Add Current IP Address
- Then choose Drivers method to connect with application
- Choose Node.js driver and copy your connection string
- Then in the file "feedback-app/app/api/mongodb/index.js" replace with url present, and enter your password by removing <password>
- Go to "feedback-app/app/api/mongodb" execute "node index.js" command.

# Running local MongoDB server
- Go to "feedback-app/app/api"
- Execute "node index-express.js" command.
- Local server would be running on "http://localhost:5000"
- Check connection status on "http://localhost:5000/status"