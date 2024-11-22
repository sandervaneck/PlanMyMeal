React OpenAI Recipe Web App

## Description

This is a React-based web application built with Node.js (v21.7.3), TypeScript, and an integration with the OpenAI API. The app allows users to interact with OpenAI to provide descriptions for recipes or analyze an image URL.

## Features

    •	Recipe Descriptions: Provide textual input for a recipe, and get descriptive information from OpenAI.
    •	Image URL Analysis: Submit an image URL to get AI-generated insights.
    •	Dynamic tab interface for user input options.
    •	Results displayed in a dedicated answer box.

### Installation and Setup

Follow these steps to set up and run the application:

1. Clone the repository:

```
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```
npm install
```

3. Configure environment variables:
   • Rename the file .env.local.example to .env.local.
   • Add your OpenAI API keys in the .env.local file:

```
REACT_APP_OPENAI_API_KEY=your-api-key
REACT_APP_OPENAI_ORGANIZATION=your-organization-id
```

4. Start the development server:

```
npm start
```

This runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## File Structure and Key Components

1. Tabs Interface

   • File: src/FullPage/index.tsx
   • This file contains the tab-based navigation that allows users to choose between:
   • Providing a recipe description.
   • Submitting an image URL for analysis.

2. OpenAI API Calls

   • File: [OpenAI Calls](src/FullPage/openai/calls.tsx)
   • Handles the interaction with OpenAI’s API based on the user’s input.

3. Result Display

   • File: [AnswerBox](src/FullPage/Components/AnswerBox.tsx)
   • Displays the AI-generated response from OpenAI in an intuitive and styled component.

## Prerequisites

    •	Node.js: Ensure you have Node.js (v21.7.3 or higher) installed.
    •	API Keys: Obtain your OpenAI API keys to enable functionality.

## How to Use

    1.	Select a tab:
    •	Recipe Input: Enter descriptive details about your recipe.
    •	Image URL: Paste a valid image URL for AI analysis.
    2.	Submit your input and wait for the AI response.
    3.	View the results in the Answer Box.
