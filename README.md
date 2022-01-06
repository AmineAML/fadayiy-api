<h1 align="center">Fadayiy API</h1>

<h4 align="center">An API for Fadayiy App, a platform for exploring space.</h4>

<p align="center">
  <a href="#etymology">Etymology</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#api">API</a> •
  <a href="#architecture-diagram">Architecture Diagram</a> •
  <a href="#how-to-use">How to use</a> •
  <a href="#built-with">Built with</a> •
  <a href="#license">License</a>
</p>

## Ethymology

Fadayiy meaning 'a space thing' in arabic, comes originally from my willingness to build this application with content in that language but wasn't satisfied with the translation options or they didn't offer a translation that was enough without having to proof read it for mistakes, which means going through hundreds of pages, a more than a one man's job.

## Key Features

The principal key features to keep note of are:

- Explore space stations
- Explore astronauts
- Explore space agencies
- Recent earth picture from space
- Astronomy picture of the day
- Upcomming launches
- Newsletter

<!-- ## Architecture Diagram

![Fadayiy Architecture](./docs/diagrams/architecture.svg)  
C4 Model Diagram -->

## How to use

### Requirements

This project is built using [NestJS](https://docs.nestjs.com/#installation), with [Node.js](https://nodejs.org/en/) v14+ and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) v8+, you can use Yarn or any other package manager after doing the required changes.

### Developing
Rename `.env.example` into `.env` and add your environment variables.
```bash
npm install

npm run start:dev
```
Which will start the server on http://localhost:3000 with the GraphQL client at http://localhost:3000/graphql

### Deploying
```bash
npm run docker:prod:up
```

## Sample queries
Once you have the GraphQL client running on your machine, you can verify things are working by executing these queries:

### Get the astronomy picture of the day
```
{
  astronomyPictureOfTheDay {
    explanation,
    hdurl,
    media_type,
    title,
    copyright
  }
}
```

### Get space stations
```
{
  stations {
    name,
    status {
      name
    },
    type {
      name
    },
    image_url,
    description,
    founded,
    deorbited,
    orbit,
    owners {
      name,
      abbrev
    },
    id
  }
}
```

## Built with

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bing Image Search](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-image-search1)
- [Launch Library 2](https://thespacedevs.com/llapi)
- [APOD](https://api.nasa.gov/#browseAPI)
- [EPIC](https://api.nasa.gov/#browseAPI)
- [Logo API](https://clearbit.com/logo)
- [Docker](https://www.docker.com/)

## License

This project is under the [MIT](https://github.com/AmineAML/fadayiy-api/blob/main/LICENSE) license.