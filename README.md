# Front-end Smart Fit
> This is a small project created as a basis for evaluating technical skills for the Front-end role.
> The original repository for this challenge can be found [here](https://github.com/bioritmo/front-end-code-challenge-smartsite)

# Preview

![preview](/src/assets/README/preview.png)

# Test Proposal
> Smart Fit, operating in the fitness segment, has undergone various changes during the pandemic. It was necessary to develop a page to search for **closed** or **open** units for consultation and reservation.

> We chose not to provide the original API for searching open/closed units for this test.

> In this test, you will implement the functionalities described below. Pay attention to the business rules defined later.

> Remember to **follow the proposed layout** in _material.

> If you cannot complete all the functionalities, remember that the most important thing is for us to have an understanding of the quality of the code and your skills for systems projects. In this case, complement your solution with comments and documentation on how you would finish the test.

### Features
- Load units through the json file `https://test-frontend-developer.s3.amazonaws.com/data/locations.json` with the `GET` method
- Search all units
- Search units with filters
- Show a preview of the found results
- Display units when searching

### Business Rules
- Filter open or closed units
- Filter units by operating period
- If no units are found, show a message to the user "No units found"
- Validate to display correct icons according to the status

### Macro Components
- Search form with filters
- Legend
- List of units

### Evaluation
- Instructions in README.md
- Programming logic
- Code quality
- Delivery quality (as if it were for production)
- Fidelity to the proposed layout
- Responsive design
- Cross-browser and device (mobile, tablet, and desktop)

> Plus
- Unit and end-to-end testing (test only what you find most important).
- Travis CI
- App in production (e.g., Heroku, Vercel, etc...)
- Running locally with Docker


### What I've done in this repository

- [x] Search form with filters
- [x] Legend
- [x] List of units
- [x] Unit and end-to-end testing.
- [x] Travis CI integration
- [ ] App in production (e.g., Heroku, Vercel, etc...)
- [x] Running locally with Docker


### Technologies used in this project

- Angular 17
- Ngx Toastr
- Cypress
- Docker
- Travis CI


All rights reserved to Bioritmo and Smartfit
