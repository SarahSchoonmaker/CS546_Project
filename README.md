**TITLE: Road Trip With Dog Stops**

**GROUP MEMBERS:**

Nicholas Board

Yansong Wang

Sarah Schoonmaker

Adaugo Akaluso

**PROJECT DESCRIPTION: Road trip planner helps dog owners find the best route to their destination. Users can write reviews of rest stops, restaurants, gas stations, hotels that accept pets, any veterinarians, camping grounds/dog parks. Users can comment and like posts from others.**

**CORE FEATURES (MUST BE IMPLEMENTED):**

1. Main Page
2. Users can create a profile, login/logout, or browse as a guest (can only view top 10 recommended stops).
3. Authenticated users can plan a trip, write/like a blog post.
4. Description of the purpose of the website with images.
5. Search form to plan a trip
6. List Page:
    1. Restaurant tab
    2. Rest Stops tab
    3. Gas Stations tab
    4. Veterinarian stops tab
    5. Hotels that accept pets tab
    6. CampGrounds/Dog Parks tab
    7. Search/Filter criteria (filter by restaurants, gas stations, location)
    8. Major highways with main/top rest stops alongside said highways tab
7. Details page for each location:
    1. Name
    2. Address
    3. Photos
    4. Bathroom status/rating/stats
    5. Description
    6. Number of Likes
    7. Comments
8. Search for road trips based on distance / time / start point & end point (location within country)
9. Log into personal account to post a blog / view saved road trips ideas & itineraries
10. Post a blog about road trip taken
    1. Delete a blog post
    2. Edit a blog post
    3. Posts with tags to make searching easier
11. Comment on blog posts
12. User Profile Page:
    1. Liked/favorite locations

**EXTRA FEATURES (IMPLEMENT IF WE HAVE TIME):**

1. Map for each location
2. Personal lists of locations for specific road trip plan
3. Google Maps link for navigation to the location
4. Highway “Spotlight” showcasing all the stops on that highway. This could change weekly
5. Create a “Dog Friendly” filter
6. A large interactive map of the United States for more visual users
    1. Ability to click on major roadways and highways
    2. Zoom in and out to see landmarks and establishments that have been mentioned in blogs
    3. Using Interactive map to select location with (geo-JSON?)

Github Repo:

**Extra notes:**

**Notes / guidelines:**

- The first thing that your group must submit is your final project proposal.
- Using a GitHub repo is required, and the URL MUST be supplied in your Proposal.

Post {postID: string/\_id, postType: “trip”/”location”, postTitle:””}

Trip {tripID: string/\_id, postTitle:, locationList: \[locationObj\] }

Location {locationID: string/\_id, address: string, } //interactive map w/ geolocation in addition to address string
