###### The Mix
## The Mix

## Contributors
- [Tyler Robertson](https://github.com/TylerNRobertson)
- [David Wawryko](https://github.com/digitalfabric92)

## About
 
The app connects people who are listening to music at the same time at the same place by generating a local radio station from everybody's individual "mix" spotify playlist. Users can also live chat in a "mixer" right next to the music.

### Core features
* The mix landing page
* Spaces (cafés/places) can create a mix channel (Two fields 1. Private/Public toggle switch 2. Name) This generates a random 5 digit code that is used to identify the mix channel to users who can authenticate when joining the mix room.
* Users can add their music recommendations to the mix by authorizing to share their location and their spotify playlist titled the "the-mix". 
* Once authenticated, users can listen to the mix on the right and chat about the mix on the left.
* Responsive design
### Stretch features
* Alternate sources to create and share the mix playlist (Youtube, Apple music, Soundcloud, Mixcloud, etc)
* Spaces can manage their space in their online profile
* Users can manage and edit their playlist in their account section.
* Integration with JukeBot (The event/party dj)
* See chat history

### Dependencies

- "Node": 5.10.x or above
- "NPM": 3.8.x or above
- "body-parser": "^1.15.2",
- "dotenv": "^4.0.0",
- "express": "^4.13.4",
- "knex": "^0.13.0",
- "Morgan": "^1.7.0",
- "node-sass": "4.3.0",
- "node-sass-middleware": "^0.11.0",
- "pg": "^7.0.1"
