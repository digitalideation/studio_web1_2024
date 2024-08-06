# Example implementation of Spotify PKCE Flow
This code implements the [Spotify PKCE Flow](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow).

# Instructions
- Follow the [getting started with the WebAPI tutorial](https://developer.spotify.com/documentation/web-api/tutorials/getting-started) and create an app
- Replace `<your client id>` in index.html and callback.html with your clientID from the Spotify dashboard (see previous step)
- Add `http://localhost:3000/SpotifyAPI/callback.html` to your apps Redirect URIs. This must be the URL where your application is running and it must be the same that is used in index.html.
   ![](./assets/spotify%20app.jpg)

- Install a webserver to serve your application under `http://localhost:3000/SpotifyAPI/callback.html`. An easy way to do this is to install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code. Configure the live server settings to use port `3000` and host `localhost`. Then open index.html with the live server.
- Open the browser console to see the response from the server.