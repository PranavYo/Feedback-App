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

# Requirements
- Node.js 16.14 or later.
- npm. (npm install -g npm)
- Verify installs with "node -v" and "npm -v".

# Running next.js app
- Clone the project.
- Then "cd feedback-app".
- Run "npm install" command.
- Verify the installs by "npm list" command.
- Run "npm run dev" to start the localhost server at port 3000.

# Connecting to MongoDB
- First create a MongoDb atlas account if not already.
- Deploy a free cluster. (Creating a cluster will automatically deploy it.)
- Create Database access credentions.
- Create a Database and collection in that cluster.
- Recommended to use Database name: "feedback-app" and Collection name: "product-request". If you choose your own names then make sure you replace the "dbName" and "collectionName" with your respective names in "feedback-app/app/api/index-express.js".
- Insert the data present in "data.json" (file provided by you) directly into collection. Do not change any format, directly copy-paste the data, they will provide input for "json file".
- After that click on Connect, to connect with cluster.
- Click on Add Current IP Address.
- Then choose Drivers method to connect with application.
- Choose Node.js driver and copy your connection string.
- Then in the file "feedback-app/app/api/index-express.js" replace with url present, and enter your password of "Database access credentions" by removing "<password>", make sure to also remove "<>" in that string.

# Running local MongoDB server
- Go to "feedback-app/app/api"
- Execute "node index-express.js" command.
- "Successfully connected to Atlas" and "app listening on port http://localhost:5000" should be displayed in the terminal.
- Check connection status on "http://localhost:5000/status"