# reactjs-ai-summarizer

## Objective

- The primary goal of the `reactjs-ai-summarizer` project is to provide users with a seamless and intuitive interface for leveraging AI-powered text summarization. 
- Drawing inspiration from a YouTube tutorial, the objective is to enhance user experience by enabling them to quickly generate concise summaries of lengthy articles or documents.

## Description

- The reactjs-ai-summarizer is a ReactJS application that incorporates cutting-edge AI technology to deliver efficient text summarization. 
- Users can easily input their desired text, and the application utilizes advanced algorithms to generate coherent and condensed summaries. 
- The project combines the power of ReactJS, Redux Toolkit, and Tailwind CSS to create a visually appealing and responsive user interface.


## Project Skeleton

```
reactjs-ai-summarizer  (folder)
|----readme.md
SOLUTION
├── public
│    └── index.html
├── src
│    ├── services
│    │       └── article.jsx
│    │       └── store.js
│    ├── assets
│    │       └── [images] 
│    ├── components
│    │       ├── Demo.jsx
│    │       └── Hero.jsx
│    ├── App.css
│    ├── App.jsx
│    └── main.jsx
├── .env
├── .gitignore
├── .eslintrc.cjs
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JavaScript
- ReactJS
- Redux Toolkit
- Tailwind CSS
- RapidAPI

To run this project;

```
# Clone the repository
$ git clone https://github.com/esadakman/reactjs-ai-summarizer

# Navigate to the project directory
$ cd ./reactjs-ai-summarizer

# Create a new .env file in the root of the project
$ touch .env

# Open the .env file in a text editor and add the following line
# Replace 'your_rapid_api_key' with the actual key obtained from https://rapidapi.com/restyler/api/article-extractor-and-summarizer
VITE_RAPID_API_ARTICLE_KEY=your_rapid_api_key

# Save and close the .env file

# Install dependencies using Vite
$ npm install vite / yarn install vite

# Start the project with Vite
$ npm run dev / yarn dev

```
 
