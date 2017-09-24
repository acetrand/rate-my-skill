# RateMySkills

A project written in Angular 4 and TypeScript. Backend is provided through the service Backand.
Much of the UI components are from Angular Material.

The idea is that you can add and remove skills, and give each one a rate between 0-5.

## How to run

* Clone the project
* Run `npm install`
* Run `npm install -g @angular/cli` to get the CLI for running the server/tests/etc. 
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running tests

* Run `ng test` to execute the unit tests
* Run `ng e2e` to execute the (one) end to end test

## Future ideas

* Add snack-bar to show error handling or other messages
* Add unit tests for the components
* Add end to end tests
* Make some simple animations when adding and removing skills
* Sorting and filtering of the skills
* Do not fetch all skills when not needed - keep a local list on the skills service as client side source
  * when deleting a skill just remove it from the local list
    *  if WS fails the skill should be revived
  * when adding a skill, just return the added skill (to get the ID)
    * if WS fail, remove the added skill
  * when updating a skill, update local list on service
    * if WS fail, restore old rate
  * this creates a faster UI and minimizes requests
