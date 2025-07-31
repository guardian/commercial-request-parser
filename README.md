# Commercial Request Parser

A tool to parse and diff commercial related requests.

It can currently parse:

- GAM requests e.g. `https://securepubads.g.doubleclick.net/gampad/ads?...`
- YouTube requests e.g. `https://www.youtube.com/embed/...`

## How to use

This tool can be useful for debugging commercial (ad) requests in the browser.

Open your browser devtools and search the network tab for a request that looks like the above.

Copy the URL and paste it into the parser tool to see the key values in a more human-readable way.

## Development / Running Locally

Once you've cloned the repo, ensure you are using the correct version of Node (see `./nvmrc`) and then install using `yarn`:

```sh
yarn install
```

To run the app locally:

```sh
yarn dev
```

To create a production build:

```sh
yarn build
```


## Deployment

This project is deployed to Github Pages via a Github Workflow that runs on each merge to the main branch

The deployed page can be found here: https://guardian.github.io/commercial-request-parser/


## Current issues

- The _diff_ view on Github Pages does not work properly. See https://github.com/guardian/commercial-request-parser/issues/23. You can still use the _diff_ functionality by running locally.