Make Find Some Fun!

Goal: a React App that let's users look up upcoming events in thier area by category & keyword 

[X] Create Eventbrite app & get auth-token
[X] Create a form for users to provide keyword & select a category
    - text input for keyword
    - selector inout for categories
    - submit button
[X] Query Eventbrite API for categories 
[X] Add categories to form's select drop down
[X] Handle user input to form 
    add alert if no keyword is provided
    grab provided keyword & category id
[X] Query Eventbrite API for matching events
[X] Create component to display info for an event <Event />
    - with: image, name, description, link to register/get tickets, location?, date?
[X] Print resutls
    add alert if no matching events
    print each returned event into an <Event /> inside <EventsList />

--- 
[X] parse multiple keywords

---
What next? 
[X] draft ReadMe so folks can use & improve upon Find Some Fun

1) make it pretty with bootstrap
[X] add react-bootstrap to project
[X] include the latest bootstrap css from the CDN
[X] review available layouts & components -- make a plan!
[X] refactor <App /> to be made of Bootstrap components
[X] refactor <Form /> ...
[X] refactor <EventsList /> ...
[X] refactor <Event /> ... 

--
2) have app access user location and prioritize/order search results by proximity
[X] Get user's location
    [X] with browser
    [X] with IP address
[] order search results by location

3) (only if 2 has happened) add map of results with flags at each venue location; pop ups on each flag moving list of events to that event's component