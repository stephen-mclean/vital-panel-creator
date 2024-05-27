# Vital Frontend Task

## Deployed Versions

This project has been deployed and can be viewed here: [https://vital-panel-creator.vercel.app/](https://vital-panel-creator.vercel.app/)

### Storybook

A deployed instance of Storybook can also be viewed here: [https://vital-panel-creator-storybook.vercel.app/](https://vital-panel-creator-storybook.vercel.app/)

## Installation instructions

This repository contains a simple express server (`index.ts`) and a React frontend (`/frontend`) which together compose the application.

### Installing dependencies

After cloning this repo the first step is:

```
npm install
```

### Environment variables

Next, you can configure the necessary environment variables:

#### API

```
cp .env.example .env
```

This will give you a `.env` file which looks like this:

```
PORT=3000
VITAL_API_KEY=
VITAL_API_ENVIRONMENT=sandbox
VITAL_API_REGION=eu
```

You need to provide an API key for the Vital API (you can generate one following the docs [here](https://docs.tryvital.io/home/quickstart#1-api-keys))

**Note:** You can also configure the `VITAL_API_ENVIRONMENT` and `VITAL_API_REGION` depending on your choices in the vital dashboard.

```
VITAL_API_ENVIRONMENT=sandbox # or 'production'
VITAL_API_REGION=eu # or 'us'
```

#### Frontend

```
cd frontend
cp .env.example .env
```

This will give you a frontend `.env` that looks like this:

```
VITE_API_BASE_URL=http://localhost:3000
```

Unless you have changed the `PORT` on which the server runs, then this `.env` shouldn't need to be changed.

### Running the project

With the dependencies installed and environment variables configured you can then run the project:

```
npm run dev
```

This command will run the API server and UI server concurrently. By default, the UI will run on [http://localhost:5173/](http://localhost:5173/)

## Decisions made

### Creating a panel - form elements

On the page to create a new panel I have added three main inputs:

- `name` - the name of the panel
- `markers` - a complex input which allows listing, searching, and selecting different biomarkers
- `method` - a dropdown which allows selecting the collection method for the panel

#### Follow ups

Based on what I can see using the Vital dashboard, the `markers` the user selects are dependent on the `lab`. I considered adding a dropdown to select the `lab` which would further filter the list of biomarkers displayed.
In my version of the app, the user is free to select markers from different apps. However, since it is listed in the requirements that only the `name`, `markers`, and `method` are to be collected, that is why I ultimately didn't add any filtering based on the lab.
This is a very easy thing to add, and we could add a second API endpoint to retrieve the list of available labs, render a select on the form, and have the existing biomarkers component react to the value of that select being changed.

### Displaying available biomarkers

The list of biomarkers retrieved from the Vital API will contain at most `50` entries in this app. This is because of the requirement to filter the list of markers on the client side. I have not used any of the filtering or pagination from the Vital API itself. I load the first page of markers from the API and then handle everything else on the client side.

#### Improvements to be made

Ideally, the API would return all of the biomarkers that are available, not just the first `50` from the API. If we want to keep the client side filtering, we could improve the API to fetch all available pages from Vital before returning it to the UI.

A better approach though would be to use the filtering/pagination from the Vital API. Then, we could remove that logic from this app and rely on the implementation from Vital.

### State management

I have decided not to rely on a state management solution for this app (like Redux, or React Query) as I felt that the app is small enough not to need it. Instead, I have placed all "api" related logic under `frontend/api`.

This directory contains several hooks which fetch and return the data needed. I have structured it this way as this layer provides a nice abstraction which we could later replace the implementation of if we decided to implement a state management solution. The hooks in that directory could delegate their work to something like Redux or React Query in the future and keep their API the same so the consuming components would still retrieve the data in the same way, even if the underlying storage were to change.

## Issues encountered

### Vital API - CORS

Initially this repo only contained a React app, and didn't have a server at all. However, once I installed `@tryvital/vital-node` and started using it from the client, I found that the API requests were failing due to CORS.
The fix for this was quite easy, however searching "CORS" on the Vital docs doesn't return any results and I feel that it could be added to the docs for `@tryvital/vital-node` that the API doesn't work from a browser environment.

## 3rd Party Libraries Used

### API

- [Express.JS](https://expressjs.com/) - to allow me to spin up an API server using Node
- dotenv - for loading environment variables

### UI

- classnames - for concatenating class names together and generating conditional class names
- [Fuse.JS](https://www.fusejs.io/) - for Fuzzy searching of the available Biomarkers. This allows users to search the biomarkers listed by either `name` or `description`
- [react-hook-form](https://react-hook-form.com/) - for form state and validation handling. This allowed me to build the form for creating a panel without having to manually manage the state or validation. I provided the validation config to react-hook-form and it handled everything else through a simple hook API
- [react-router-dom](https://reactrouter.com/en/main) - for handling front-end routing.
- [react-tooltip](https://www.npmjs.com/package/react-tooltip) - for adding tooltips to different elements. I used this to allow adding tooltips to several buttons throughout the app. In particular, it allowed me to give context to users on what certain buttons do or are doing. This is especially helpful when a button only renders an icon, or when a button is disabled (it allows me to tell the user why it is disabled).
