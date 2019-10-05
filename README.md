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

## End to end tests

We use cypress. Please check `e2e` for more details.
If you wan to add a new test use the following command and wait for cypress to open

```
yarn e2e-build
yarn start
yarn workspace @dblechoc/e2e cypress open
```

## Storybook

This is where we list all our components (comes with hot reloading)

```sh
$ yarn storybook
```

After doing this, you'll have a showcase page running at [http://localhost:6006](http://localhost:6006)

## CI

We are using [Github Actions](https://help.github.com/en/articles/about-github-actions).

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
