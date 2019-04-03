Make Find Some Fun!

Goal: a React App that let's users look up upcoming events in thier area by category & keyword 

[X] Create Eventbrite app & get auth-token
[] Create a form for users to provide keyword & select a category
    - text input for keyword
    - selector inout for categories
    - submit button
[] Query Eventbrite API for categories 
[] Add categories to form's select drop down
[] Handle user input to form 
    add alert if no keyword is provided
    grab provided keyword & category id
[] Query Eventbrite API for matching events
[] Create component to display info for an event <Event />
    - with: image, name, description, link to register/get tickets, location?, date?
[] Create a container to hold all the events <EventsList />
[] Print resutls
    add alert if no matching events
    print each returned event into an <Event /> inside <EventsList />