# Example for Google Gemini API with node.js
This example shows how to send inline images to the Google Gemini API and ask questions about them.

# Instructions
- Install [node.js](https://nodejs.org/)
- In a terminal, navigate into the project folder (`cd '.\Google Gemini API\'`)
- Install the dependencies with `npm install`
- Copy the file `.env_template` and rename the copy to `.env`
- Create a new project in the [Google Cloud Console](https://console.cloud.google.com/). You will receive some credit through the Google Education program to use for this project.
- In the `.env` file add your Google API key. You can create an API key in the [AI studio](https://aistudio.google.com/app/apikey). Select the name of the project that you created in the Google Cloud Console. Make sure to never commit your API key, it can easily be stolen and costs could be created on your account. For this reason, the `.env` file is on the `.gitignore` list of files which will not be committed.
- Run `node server.js`
  