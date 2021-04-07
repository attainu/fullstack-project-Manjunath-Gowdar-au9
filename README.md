# BuyMax e-commerce
>click here for [MarkDown Documentation](https://github.com/attainu/fullstack-project-Manjunath-Gowdar-au9/tree/dev) (which is '.md' file)

![screenshot](https://github.com/attainu/fullstack-project-Manjunath-Gowdar-au9/blob/dev/z_extra/Screenshot%20(2532).png?raw=true)

### Contents

- [Description](#description)
- [Group Member](#project-group-member)
- [Project Goal](#project-goal)
- [Features](#features)
- [Technology](#required-tech-stack)
- [Browser Compatibility](#browser-compatibility)
- [Live Demo](#live-demo)
  
  - [Complete Video Demo](#live-demo)

## <br>

# Description

[BuyMax](https://buymax.herokuapp.com/) is a E-commerce website for electronics, specially for tech savvy. With good functionality and UI.

BuyMax is a centralized platform for gadgets lovers to view latest Gadgets. Users also have the ability to log in and provide their own ratings and reviews for courses based on their own experiences, after purchase

---

## Project Group Member
- Manjunath Gowdar

---

## Project Goal

We are looking to build a website where users are able to view and/or provide reviews for purchased orders.  Users will be able to view the product on a details page. They would also be able to filter and/or search for specific product. We are also hoping to add several other features such as a button for users to report issues.

---



### Features

- Sign up and Login form.

- Detailed view of the product.
- User's cart items.
- Rating the product with comments after purchase.
- Maintaining the cart.
- Checkout option.
- Recommended product.

---

## Technology & Stack used

>I have used MERN stack to develop this project

- HTML, CSS, JS
     >I have used in various parts of our project to create divs and sometimes paragraph tags for formatting. CSS is used for all of our components for styling, formatting, and controlling our website appearance. Javascript is used across all or most of our project components to add functionality to the front end such as mapping and filtering. To maintain responsiveness and easily position elements, we used flexboxes to format some components.

- React & Redux also hooks
    >I have used react as ui library because of its performance, Redux as global state management which is very usefull, and for local state management i have used hooks which is very simple and fun to use.

- MongoDB for Database
   > I used MongoDB Atlas for our database to store our data product, reviews, and users. Whenever our web app needs data, it will get the relevant data from our collection in MongoDB to display. MongoDB is schema-less(i have used mongoose which makes use of Schema), which means that it is fast in processing document requests and more lenient with the structure of each document, and will allow easy scaling in the future.

- Node.js
    > I have used node.js as server which also uses express to create and maintain routes

- Build & Deployment
    >Both client and server has been deployed to Heroku, which is very usefull because if any change is done to code base then with simple heroku push the change will be live within seconds

- To Run this app
   >npm install @ root
   cd frontend
   npm install
   cd ..
   npm run dev
   
  - you should have .env file with variable
    > - MONGO_URI
    > - JWT_SECRET

---

<br>

### Browser Compatibility

Tested in the following browsers/versions:

- Google Chrome 7.0+
- Internet Explorer 9.0+
- Firefox 4.0+
- Safari 5.1.4+
- Mobile Safari 6.0+
- Opera 12.0+
- Microsoft Edge

---

<br>
<br>

### Live Demo

- ## [Complete Video Demo](https://youtu.be/GqbWb5KmiyE)
- ### [Visit Website](https://buymax.herokuapp.com/)
