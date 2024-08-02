# fourth-weather-5-day
A simple weather app with a 5 day cast with 3 hours apart weather. This should demonstrate simple skills in building a small webapp and working with axios, state, types, interfaces and delegating component architecture

## Getting Started

To run this weather app locally, please follow the instructions below.

### Prerequisites

Before running the app, make sure you have the following installed on your machine:

- Node.js preferably LTS version (written using 18.19.1);
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

    ```shell
    git clone https://github.com/your-username/fourth-weather-5-day.git
    ```

2. Navigate to the project directory:

    ```shell
    cd fourth-weather-5-day
    ```

3. Create a .env file that contains: 

    ```
    VITE_API_URL=https://api.openweathermap.org/data/2.5/forecast
    VITE_API_KEY=your-api-key
    VITE_ICON_URL=http://openweathermap.org/img/w/
    ```

4. Install the dependencies:

    ```shell
    npm install
    ```

### Starting the App

To start the weather app, run the following command:

```shell
npm start
```

This will start the app on your local machine. Open your web browser and visit `http://localhost:5173` to view the app.
### Additional Steps for Vite App

If you are running a Vite app, you need to perform the following additional steps:

1. Build the app:

    ```shell
    npm run build
    ```

    This will generate the production-ready files in the `dist` directory.

2. Serve the app:

    ```shell
    npm run serve
    ```

    This will start a local server and serve the app on `http://localhost:5000`.

Make sure to follow these steps after completing the installation and before starting the app.
