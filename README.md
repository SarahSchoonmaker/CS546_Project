TITLE: Road Trip With Dog Stops

GROUP MEMBERS: 
Nicholas Board
Yansong Wang
Sarah Schoonmaker
Adaugo Akaluso 

PROJECT DESCRIPTION: Road trip planner helps dog owners find the best route to their destination. Users can write reviews of rest stops, restaurants, gas stations, hotels that accept pets, any veterinarians, camping grounds/dog parks. Users can comment and like posts from others.

CORE FEATURES (MUST BE IMPLEMENTED):

Main Page
Users can create a profile, login/logout, or browse as a guest (can only view top 10 recommended stops).
Authenticated users can plan a trip, write/like a blog post. 
Description of the purpose of the website with images. 
Search form to plan a trip
List Page:
Restaurant tab
Rest Stops tab
Gas Stations tab
Veterinarian stops tab
Hotels that accept pets tab
CampGrounds/Dog Parks tab
Search/Filter criteria (filter by restaurants, gas stations, location)
Major highways with main/top rest stops alongside said highways tab
Details page for each location: 
Name
Address
Photos
Bathroom status/rating/stats
Description
Number of Likes
Comments
Search for road trips based on distance / time / start point & end point (location within country) 
Log into personal account to post a blog / view saved road trips ideas & itineraries 
Post a blog about road trip taken 
Delete a blog post
Edit a blog post
Posts with tags to make searching easier
Comment on blog posts
User Profile Page:
Liked/favorite locations




EXTRA FEATURES (IMPLEMENT IF WE HAVE TIME):

Map for each location
Personal lists of locations for specific road trip plan
Google Maps link for navigation to the location
Highway “Spotlight” showcasing all the stops on that highway. This could change weekly
Create a “Dog Friendly” filter
A large interactive map of the United States for more visual users
Ability to click on major roadways and highways
Zoom in and out to see landmarks and establishments that have been mentioned in blogs
Using Interactive map to select location with (geo-JSON?)


Github Repo: 


Extra notes:

Notes / guidelines:
The first thing that your group must submit is your final project proposal.
Using a GitHub repo is required, and the URL MUST be supplied in your Proposal.

Post {postID: string/_id, postType: “trip”/”location”, postTitle:””}
Trip {postID: string/_id, postTitle:””, locationList: [locationObj] }
Location {locationID: string/_id, address: string, } //interactive map w/ geolocation



