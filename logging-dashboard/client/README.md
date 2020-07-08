# Fractal Admin Dashboard

![Node.js CI](https://github.com/fractalcomputers/admin-dashboard/workflows/Node.js%20CI/badge.svg)

This repository contains the code for the Fractal dashboard used to deliver support and monitor the Fractal cloud infrastructure and userbase.

The dashboard webpage is hosted on Netlify at: https://fractal-dashboard.netlify.app/

The username to access the dashboard: `fractal-admin`

The password to access the dasbhoard: `!!fractal-admin-password!!123`

The Fractal dashboard can be used for:

-   Seeing the list of Users
-   Seeing the list of VMs
-   Monitoring the status of the VMs
-   Fetching the protocol logs of user sessions to troubleshoot and debug errors
-   Accessing other important Fractal links, including GitHub, Slack, Notion and Google Drive

## Development

The admin dashboard is developed using the `npm` package manager. You can start developing by running `npm install`, and can launch into a localhost via `npm start`.

If you need to update dependencies, you can run `npm upgrade`, followed by `npm prune` to remove unnecessary dependencies.

Basic continuous integration is set up for this project. For every push or PR, basic NodeJS tests will be compiled and run within GitHub Actions. This will also auto-format the code via Prettier, see below. You should make sure that every push to master passes the build in GitHub Actions, and that you pre-formatted the code via Prettier as well. 

## Styling

To ensure that code formatting is standardized, and to minimize clutter in the commits, you should set up styling with [Prettier](https://prettier.io/) before making any PRs. You may find a variety of tutorial online for your personal setup. This README covers how to set it up on VSCode and Sublime. You can always run Prettier directly from a terminal via `npm run format`.

### [Sublime](https://packagecontrol.io/packages/JsPrettier)

Install prettier if you haven't yet.

```
# npm (local):
npm install --save-dev prettier

# npm (global):
npm install --global prettier
```

The easiest and recommended way to install Js​Prettier is using Package Control. From the application menu, navigate to:  
`Tools` -> `Command Palette...` -> `Package Control: Install Package`, type the word JsPrettier, then select it to complete the installation.

Usage

1. Command Palette: From the command palette (ctrl/cmd + shift + p), type JsPrettier Format Code.
2. Context Menu: Right-click anywhere in the file to bring up the context menu and select JsPrettier Format Code.
3. Key Binding: There is no default key binding to run Prettier, but you can add your own.

We recommend setting `auto_format` to `true` in Sublime so you won't need to worry about the usage methods.

### [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

```
ext install esbenp.prettier-vscode
```

To ensure that this extension is used over other extensions you may have installed, be sure to set it as the default formatter in your VS Code settings. This setting can be set for all languages or by a specific language.

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
