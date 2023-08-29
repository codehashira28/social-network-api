# social-network-api
## Description

[Social Network API](https://drive.google.com/file/d/1K6TQ0t7JLFimr9O1MKhr7UsEVEox2IAO/view)

The Social Network API is an API for a social network that allows users to share their thoughts, react to other's thoughts, and add or remove friends. This application was built using Express.js, MongoDB database, and the Mongoose ODM.

## Installation

Navigate to the Insomnia API Development Platform website and use prompts to install Insomnia.

[Insomnia](https://insomnia.rest/)

## Usage

Run the 'nodemon' command in the terminal at the project path so that the server is listening at localhost port 3001. Once done, the user is then able to run GET, POST, PUT, and DELETE requests to the server at the following API routes:

    /api/users
    /api/thoughts

Additional POST and DELETE requests can be ran at the following API routes:

    /api/users/:userId/friends/:friendId
    /api/thoughts/:thoughtId/reactions






## Credits

Code structure and written code was heavily inspired by similar class activities. Additional google resources helped with syntax clarification.