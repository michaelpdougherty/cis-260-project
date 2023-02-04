# cis-260-project
CIS 260 Project - Spring 2023

Frontend bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
See `frontend/` for more details.

## Local Development Instructions

1. Open Git Bash
2. `cd` into the folder where you want to place the project. (A folder called 'cis-260-project' will be created)
3. `git clone https://github.com/michaelpdougherty/cis-260-project` 
4. `cd cis-260-project/backend`
5. `cp example.env .env` (Copy `example.env` to secret file `.env`)
6. Edit `.env` to add your DB username and password (`notepad .env`?)
7. `cd ..` to return to the project root
8. `npm run build`
9. `npm start`
10. The app should run on localhost:3000
11. Everything is working if you can click the "Patients" tab and see the data.

## Available Scripts (Front-End)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

