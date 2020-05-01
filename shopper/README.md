## Overview

In this coding challenge, you will be creating a simple grocery-list web app called Shopper. With Shopper, users can manually enter and store the grocery items that they want to purchase, label grocery items (e.g. "bought"), or delete items from their grocery list.

## Getting Started

Git clone this repository, and ```cd``` into the shopper folder. Then type ```npm install``` to install all the packages, and ```npm start``` to start on localhost.

## Technical Details

You will have three hours to build a grocery-list app. A demo of the minimum features we would expect this app to have is here: https://shopper-solution.herokuapp.com/. (Give it a minute to load, it's on the free Heroku plan). (NOTE: We do not expect your implementation to look like this, this is just to demonstrate the functionality).

Concretely, the features are:

1. Ability to manually enter grocery items. We don't require that you do spell-checking here, but we do require that you do this via Redux actions/reducers. (HINT: An example action called storeGroceryItem has already been implemented and imported for you in src/components/PageHomeNew/NewHome.js).
2. Ability to view all your stored grocery items.
3. Ability to apply labels to grocery items. In the demo, we can mark grocery items as "bought" or "not available." This, should be done via Redux actions/reducers.
4. Ability to delete grocery items from the list. This should be done via Redux actions/reducers.

The files we expect you to modify are src/components/PageHomeNew/NewHome.js for the home page rendering; src/components/actions/index.js for actions; src/components/reducers/cart_reducer.js for the reducer.

## How You Will Be Assessed

Your solution will be assessed using three main criteria: functionality, design, and user experience. 

1. Functionality measures how well your code works--are all the features implemented, and are there any obvious bugs? 
2. Design measures how aesthetically pleasing your final product is. You may have noticed that the above demo looked very bare-boned; this is done intentionally, so as to not influence your design decisions. Since this is a timed challenge, we don't expect the final product to look like the Stripe dashboard, but we are looking to develop a sense of what your design + overall CSS abilities might be (although we understand that good designs are difficult to implement under time pressure).
3. User experience measures how easy it is to use the website. Responsive components (i.e. components that react to user behavior, for instance, notifications that something has been done successfully) are heavily encouraged. There is no one right away to do make this web app, and we encourage you to be as creative as you'd like with features and design.

## Bonus Points

If you finish early, feel free to add extra features that you think would improve the web app. A few suggestions are:

1. Add a "quantity" field for each grocery item.
2. Redux states disappear if you clear the browser cookies. A database is a better way to store grocery items, if you can spin up a backend quickly. API calls should be handled in sagas/index.js.

## Once You're Finished

Please DO NOT push to master; instead, branch your changes into a new branch via ```git branch [BRANCH NAME]``` and ```git checkout [BRANCH NAME]```, and submit your branch via ```git push origin [BRANCH NAME]```.

Have fun--we look forward to seeing your work!
