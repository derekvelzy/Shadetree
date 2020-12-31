# Shadetree #

## Overview ##
This app was created to help people with car/motorcycle troubles find a local hobbyist mechanic, or to help others find specialty work that would otherwise be more difficult to find (harness rewiring, retrofitting, painting).

This is currently an MVP with the ability to login, signup, search for a specific service at a specific area, and browse top rated mechanics.

## Screenshots ##
![Shadetree Home](https://shadetree-project.s3-us-west-1.amazonaws.com/Shadetree_home.png)
![Shadetree Results](https://shadetree-project.s3-us-west-1.amazonaws.com/Shadetree_results.png)
![Shadetree Login](https://shadetree-project.s3-us-west-1.amazonaws.com/Shadetree_login.png)

## Features ##
- New users can signup with an account and existing users can login with their credentials.
  - Authorization is saved in users' cookies for up to one hour.
- Users can search for services and set your location to only serch for mechanics within your local area.
- Search results show all mechanics in your area along with their rating, and a map of your searched area.
- Top rated mechanics (over 4.7 rating) and example services are queried from database upon page load.
  - Top mechanics can be viewed along with all of the services they perform.
  - Example services are displayed in a carousel.

## Tech/framework Used ##
__Built with__
- [Next.js](https://nextjs.org)
- React
- PostgreSQL

__Other technologies used__
- Styled Components
- Bcrypt
- JSON Web Token

## Run the Project Locally ##
From the repo
1. Clone the project locally
2. Run ```npm install``` in the command line
3. Run ```npm run dev``` in the command line
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

