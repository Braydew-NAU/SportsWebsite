# Software Analysis Deliverable

## System Description

The problem of inefficient access to sports game _schedules_ and underpromotion of sports-related **Movies** and shows affects **sports fans**. The impact of which is wasted time spent searching multiple websites for game _schedules_ and broadcast channels and entertainment _ratings_. For sports fans who want to easily find broadcasting information for games and _ratings_ for sports **Movies** and shows. **GameFanHub** is a sports entertainment platform that consolidates live game _schedules_ and _ratings_ for sports-related content into one site. Unlike other platforms like ESPN or IMDB, our product focus on combining both sports _schedules_ and _movie ratings_ to provide a one-stop solution for sports enthusiasts. **GameFanHub** is a comprehensive sports entertainment platform that provides sports fans with up-to-date broadcasting information for sports games and _ratings_ for sports **Movies**, all in one place.

## Stakeholders 
- **_Users_** like **Sports Fans & Enthusiasts** are general visitors of the website who can engage with the provided content.
- **_Clients_** like Sponsors & Advertisers are **_clients_** looking to advertise their products, they can provide funding by sponsorships and ads.
- **_Developers_** are Web delevopers, UI designers they will implement website features, optimize _performance_ & ensure perfect **_User_** experience.
- **Product Managers** will work with **_developers_** and designers to use **_User_** feed back to adjust website accordingly
- **Competitors** are other Website/Apps who we compete with for audience engagement, ad revenue, etc...
- **Detractors** are critics who evaluate our website's credebility, accuracy & critique **_User_** experience.

## Requirements
- **User Management** should have a _user registration_ and _log in_, also with the ability to _follow teams_.
- **Live Scores** needs to match _schedules_ and _results_ with _live score updates_.
- **Search** should allow searching through _catalog_ of **Movies** or players and teams.
- The _performance_ of the website should be able to respond within seconds and handle traffic.
- The **usability** should allow the **_User_** should to be able to easily navigate through the website.
- The website should be _scalable_ to any screen size of the device it is on.
- The website should be able to be _available_ almost all the time and on many devices.
- The website should be _compatable_ on many different browsers.
- The website should be built in a way that it can easily be _updated_ and _maintained_. 

## Use Cases

Use Case 1: Login to website 
Actor: **_User_**,
Trigger: **_User_** wants to enter website,
Pre-Conditions: **_User_** has account,
Post-Condition: **_User_** is logged in and able to access website,

Success Scenario: 
1. **_User_** initiates login
2. **_User_** has _valid credentials_
3. **_User_** accesses website

Alternate Scenario:
2. **_User_** doesn't have _valid credentials_
3. Website informs of invalid login
4. Application asks **_User_** to reset password or report problem.

Use Case 2: Live action scores
Actor: **_User_**,
Trigger: **_User_** wants to see live updates or streaming services of a game,
Pre-Conditions: **_User_** is logged in and finds valid game,
Post-Condition: **_User_** can see live updates as well as the streaming services the game is on,

Success Scenario:
1. **_User_** initiates login
2. **_User_** finds a valid game
3. **_User_** clicks on game to enter status
4. Application is giving _current status_ of game and streaming services. 

Alternate Scenario:
2. **_User_** can't find game
3. **_User_** is not given _current status_ of game
4. **_User_** reports the problem

Use Case 3: **Search** 
Actor: **_User_**,
Trigger: **_User_** wants to find a team, league, or sport,
Pre-Conditions: **_User_** is logged in,
Post-Condition: **_User_** finds specific team, league, or sport wanted,

Success Scenario:
1. **_User_** is logged in
2. **_User_** searches for wanted thing. 
3. Application gives a screen of specified request
4. **_User_** clicks the game, league or sport to favorite or get live status.

Alternate Scenario:
2. Application can't find the **Search**
3. Application gives an _error message_ 
4. **_User_** can **Search** again or report problem. 

Use Case 4: Filter **Movies**
Actor: **_User_**
Trigger: **_User_** wants to browse sports **Movies** based on a specific _category_
Pre-Conditions: **_User_** has accessed the website
Post-Condition: The **_User_** finds and views **Movies** in the selected _category_

Success Scenario:
1. The **_User_** navigates to the _movie database_
2. **_User_** selects a _category_
3. Application filters and displays mocies that match the selected _category_
4. **_User_** scrolls through the _filtered list_
5. **_User_** selects a movie to view its details

Alternate Scenarios:
1. Application has no **Movies** in the selected _category_
2. Application displays a message indicating no _available_ **Movies**
3. **_User_** can select a different categoru or return to the full movie list.

Use Case 5: Add a Movie to Watchlist
Actor: **_User_**
Trigger: **_User_** want to save **Movies** to watch later
Pre-Conditions: The **_User_** is logged in to their account
Post-Condition: The movie is successfully added to the **_User's_** watchlist

Success Scenarios:
1. The **_User_** logs into their account
2. **_User_** browses or searches for a movie
3. Use clicks the "Add to Watchlist" button
4. Application confirms the movie has been added to the **_user's_** watchlist
5. **_User_** can access the watchlist later to view saved **Movies**.

Alternate Scenarios:
1. **_User_** is not logged in
2. Application prompts the **_User_** to _log in_ before adding **Movies** to watchlist
3. **_User_** logs in and repeats the process


## User Stories

**User Story 1:**
- **As a** big sports viewer and enjoyer,
- **I want** to recieve reminders of when my favorite team is going to play,
- **So that** I never miss a game of my team.
- **Priority:** Medium
- **Estimation:** 8 Hours

**User Story 2:**
- **As a** sports reporter,
- **I want** to know what channel each team is going to play on,
- **So that** I know what channel to tune into.
- **Priority:** High
- **Estimation:** 5 hours

**User Story 3:**
- **As an** avid sport movie lover,
- **I want** to know what are the _highest-rated sport Movies_ are,
- **So that** I can enjoy a great sport movie for enjoyment.
- **Priority:** Intermiadate
- **Estimation:** 3 hours

**User Story 4:**
- **As a** sports enthusiast,
- **I want** to browse sports **Movies** that are classics,
- **So that** I can stay _updated_ with the old **Movies**.
- **Priority:** Intermiadate
- **Estimation:** 6 hours

**User Story 5:**
- **As a** fan of specific sport teams,
- **I want** to be able to watch my favorite teams win on the networks I own,
- **So that** I can know if I will be able to watch my team.
- **Priority:** High
- **Estimation:** 12 hours

**User Story 6:**
- **As a** bored visitor of the site,
- **I want** to browse **Movies** that sport lovers watch,
- **So that** I can keep growing my _watched movie collection_.
- **Priority:** Low
- **Estimation:** 2 hours

**User Story 7:**
- **As a** sport movie fan,
- **I want** to be able to filter sport moives by the sport,
- **So that** I can watch **Movies** of the sport that I want.
- **Priority:** High
- **Estimation:** 7 hours

**User Story 8:**
- **As a** sports watcher,
- **I want** to be able to get movie recommendations of my favorite sport,
- **So that** I can continue to watch everything related to my sport.
- **Priority:** Intermiadate
- **Estimation:** 14 hours

**User Story 9:**
- **As a** sports lover,
- **I want** to be able to know at what time my favorite team will play at,
- **So that** I can be on time to watch the game in local time.
- **Priority:** High
- **Estimation:** 3 hours

**User Story 10:**
- **As a** big movie critic,
- **I want** to be able to write and read reviews on specific **Movies**,
- **So that** I can share my opinion and potentially see other reviewed **Movies**.
- **Priority:** Intermiadate
- **Estimation:** 4.5 hours

## Model

Below is the UML class diagram representing the conceptual model of the system. Each class is properly linked through the associations, and cardinalities are included where necessary.
![UML Class Diagram](UML_Class_Diagram.png)


