# i18n-using-react-intl-ssg
Simple example of using react-intl for Next.js with your static-generated-site / SSG

## Usage
- Open your terminal
- Clone the project using `git clone`
- Open the directory in the terminal and run `npm i`
- After the packages installed run `npm run dev` for the server hosted project
- Run `npm run build` this will run `next build && next export` to generate the static site to the `/out` folder

## How to run static site from `/out` folder
- Install `http-server` using the `npm i -g http-server` command to add it globally
- After the package is installed got to the `/out` directory and run `http-server` to host your static site locally on port `:8080`
