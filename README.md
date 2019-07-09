## next-level

[View the application](https://next-level.now.sh/)

Ultra high performance progressive web application built with React and Next.js.

[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Performance)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=PWA)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Accessibility)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=Best%20Practices)](https://github.com/ebidel/lighthouse-badge)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100&category=SEO)](https://github.com/ebidel/lighthouse-badge)

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Dblechoc/next-level)

## Features

- Progressive web app
  - offline
  - install prompts on supported platforms
- Server side rendering
- Next.js 9.x (canary)
- Webpack 4.x
- Babel 7.x
- Now.sh 2.x
- Yarn (monorepo with workspaces)

## Things to know

- A production build is deployed from a merge to master
- A staging build is deployed from a PR against master

## Setting up the project locally

First of all make sure you are using node `10.15.3` (any node 10.x would also do) and latest yarn, you can always have a look at the `engines` section of the `package.json`. Why node 8.10. We are using Now.sh to make the app available online and underneath it's using AWS lambda and you have to use Node 8.

```sh
$ yarn (install)
$ yarn dev
```

After doing this, you'll have a server with hot-reloading running at [http://localhost:3000](http://localhost:3000).

## Run tests and friends

We don't want to use snapshots, we use also use [react-testing-library](https://github.com/testing-library/react-testing-library) to avoid having to use enzyme and to enforce best test practices.

```sh
$ yarn format
$ yarn typecheck
$ yarn lint
$ yarn test
```

or

```sh
$ yarn ci
```

## End to End tests

The end to end tests use the provided samples input and output. Please check `e2e/basic.test.tsx` for more details.

If you want to see it running locally visually (not headless) go change `packages/e2e/jest-puppeteer.config.js` and set `headless: false`.

```sh
$ yarn e2e
```

## Storybook

This is where we list all our components (comes with hot reloading)

```sh
$ yarn storybook
```

After doing this, you'll have a showcase page running at [http://localhost:6006](http://localhost:6006)

## CI

We are using [Github Actions](https://developer.github.com/actions/). You can also run those actions locally using [Act](https://github.com/nektos/act). You'll have to have docker on your machine. Test are using a local docker image `workflows/action-puppeteer/Dockerfile`.

```sh
$ brew install nektos/tap/act
```

### Local CI Commands

```sh
# List the actions
$ act -l

# Run the default (`push`) event:
$ act

# Run a specific event:
$ act pull-request

# Run a specific action:
$ act -a test

# Run in dry-run mode:
$ act -n

# Run in reuse mode to save state:
$ act -r

# Enable verbose-logging (can be used with any of the above commands)
$ act -v
```

## Next maintenance

All the documenation is located here: [https://nextjs.org/docs/#setup](https://nextjs.org/docs/#setup)

## Now maintenance

All the documentation is located here: [https://zeit.co/docs](https://zeit.co/docs)

```sh
# Install
$ curl -sfLS https://zeit.co/download.sh | sh
```

### Useful commands

```sh
# check all running instances
$ now ls

# check logs for a given instance
$ now logs your-app.now.sh --all

# check all alias (running instances to your-app.now.sh)
$ now alias ls
```
