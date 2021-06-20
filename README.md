
## XPollinate

XPollinate is a cross-chain bridge that allows users to connect their Web3 wallets and swap assets between different networks, such as xDai Chain, Matic Mainnet, Fantom Mainnet and Binance Smart Chain Mainnet.

## Project Structure

The default template is a monorepo created with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

Workspaces makes it possible to setup multiple packages in such a way that we only need to run `yarn install` once to install all of them in
a single pass. Dependencies are hoisted at the root.

Owing to this dependency on Yarn Workspaces, this repository can't be used with npm.

## Available Scripts

In the project directory, you can run:

#### `yarn`

Installs dependencies

#### `yarn react-app:start`

Runs the React app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

#### `yarn react-app:test`

Runs the React test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

[Read more about testing React.](https://facebook.github.io/create-react-app/docs/running-tests)

#### `yarn react-app:build`

Builds the React app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the React documentation on [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
