# pitched
pitched is a campsite review app where users can write about and rate their experiences at camping locations all over the world. With this application, the hope is to inspire users to go outside and create a community of fellow campers!

## Technologies Used
### JQuery/JavaScript:
  * Providing campstie location on hover over thumbnail photos
### Node.js/Express/EJS
  * Templates for main page, type breakouts (i.e. car, tent, etc.), and user posts
  * Template for campsite focus pages 
  * Templates for edit and add review pages
  * 17 RESTful routes to support CRUD and user login/authentication
  * Use of partials for navigation, head, and footer elements
### MongoDB/Mongoose
  * Relational database storing 3 collections (reviews, comments, and session data)
### CSS/Bootstrap:
  * Thumbnail photos
  * Main page text ("Get inspired & camp out")
  * Image carousel on campsite focus pages
  * Glyphs!

## Approach
### Research: 
I love camping. Car camping, RVing, backpacking, you name it - I just really enjoy spending time outdoors with great people. That being said though, the right campsite can make or break a trip, so I spend a lot of time prior trying to find THE optimal spot to camp. I came up with the idea for this app while trying to do just that for an upcoming vacation and was facing some difficulty finding websites that just reviewed and rated individual campsites in a straightforward, simple way. I drew inspiration from sites with similar concepts, like [Hipcamp](https://www.hipcamp.com/) and [The Dyrt](https://thedyrt.com/).

### Wireframe: 
I created the three initial wireframes below to lay out the main page, the campsite focus pages, and the add/edit pages. My goal was to really keep the site simple, yet intuitive, and showcase the photos taken by users.

<img src="https://i.imgur.com/INuPEz9.png" 
alt="Main page" width="400" height="441" border="10" /></a>

<img src="https://i.imgur.com/AmVIDbN.png" 
alt="Focus page" width="400" height="496" border="10" /></a>

<img src="https://i.imgur.com/5bh8ozU.png" 
alt="Add/Edit" width="400" height="412" border="10" /></a>

### User Stories: 
To manage the creation of the app, I roughly framed out a series of user stories that are listed in the document below. The horizontal line in the document splits the stories into two groups: those that were required in order to produce the minimum viable product and those that were stretch goals. In working through these stories, I began with those above this line (representing the MVP), starting with getting the data layer setup and perfected, before moving on to the presentation layer. 

https://docs.google.com/document/d/1QSpDlV-q6BiTwUN2nSyUWj9UDVjoobX915E-xXuxCb0/edit


## Heroku Link: 

https://pitched-app.herokuapp.com/reviews

## Future Enhancements
There are a few things that I would like to come back to or improve upon in the future, given more time to work on the app:

### Ability to store image files: 
Right now, users have to add actual urls for the images they'd like to ubmit with their reviews instead of having the ability to send files to the database. I did make an attempt to translate the filepaths into urls but ran into storage spacelimitations. In the future, it would be nice to connect the app to a database that could handle image file storage.

### Improved error handling on forms: 
When users leave certain required fields empty on the add and edit page forms, the page redirects to style-less non-user-friendly message and they're required to hit the back button in order to fix the issue. If I had the time, I would go back and make sure that better, more intuitive messages are displayed on the forms, in line with the field causing the error.

### Dynamic login modal: 
Creating the login/logout functionality was definitely a stretch goal for me so I didn't get too far in making that experience totally seamless. You'll notice that if a user navigates around the site first without logging in and then, on some random page, they decided to hit the log in link, they're alway redirected back to the main page with the log in modal overlaid. That's because the login page is essentially just a replica of the main page with an overlaid modal. In the future, I'd probably add the modal as a partial to each page so that upon clicking log in, wherever you're at on the site, it would pop up and overlay that page. Once you've logged in you'd be taken back to that page, not necessarily the main page.

### CSS cleanup
