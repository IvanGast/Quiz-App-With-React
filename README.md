# Async / await, Redux thunk. 

## Goal

Add redux thunk to quiz page and using fetch library, call json server data

## Tasks

* Install json-server globaly - `npm install -g json-server`

* On separate shell instance, start your json-server (database file - database.json)

* Add redux thunk to store as a middleware

* Implement quiz questions getting using provided api wrappers

* Implement feedback posting to json-server using api providers (add actions and reducers, types are provided)

* (Time waster) Add another page with route `/feedback-results` which would list all answers information

* (Time waster) Add button in HomePage 'Results' which would allow you to access results of entered quiz

* (Time waster) Implement actions and reducers needed to display all feedback answers

* (Time waster) Write aggregator selector which would get summary of all feedbacks

* (Time waster) Display aggregated information in `feedback-results` page
