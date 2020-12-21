# Getting Started 
I created this project to familiarize myself with Spotify API and React/Redux. To run this build locally, you must clone this repository and register your local app with Spotify.

Here are some docs to help with Spotify's end:\
https://developer.spotify.com/documentation/general/guides/app-settings/\
https://developer.spotify.com/documentation/general/guides/authorization-guide/

### `git clone https://github.com/jasonngov/spotify-browse-discover.git`

## Available Scripts

In the project directory, you can run:

### `npm install`
This installs all the dependencies I used to your local node_module

### `npm start`
Runs the app in the development mode.\
Opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. (shoutout webpack) \
You will also see any lint errors in the console.

To start the authentication server, navgiate to /src/server/ and run this command in a separate terminal. 
This navigates to an endpoint that authenticates and provides your bearer token from Spotify

## Future Work:
- Add support to follow an artist
- Add support for adding songs to your playlist
- Fix uri endpoint when token expires
- Make this repository public