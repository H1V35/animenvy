# Technical Test: Animes App (Intermediate)

This application is a technical test designed to evaluate React skills. It consists of a simplified anime application that allows users to view a list of animes, access their detailed content, and add them to favorites.

## Difficulty Level

Intermediate

## User Stories

1. **View Animes:** As a user, I want to see a list of animes so I can choose which one to watch.
2. **Anime Details:** As a user, I want to be able to click on an anime to view its full content.
3. **Add to Favorites:** As a user, I want to be able to add an anime to favorites so I can watch it later.
4. **Search Animes:** As a user, I want to be able to search for animes by their name to find them more easily.
5. **Pagination:** As a user, I want to see only a limited number of results per page and be able to navigate between different result pages.

## Engineer Stories

1. **Create Anime List Component:** As an engineer, I need to design a component that displays all available animes.
2. **Implement Pagination:** As an engineer, I need to add pagination to the anime list component to show only a limited number of results per page and allow users to navigate between different result pages.
3. **Implement Search:** As an engineer, I need to add a search field to the anime list component to allow users to search for animes by their name.
4. **Implement Navigation:** As an engineer, I must implement navigation between the list of animes and their details using React Router.
5. **Manage Favorites:** As an engineer, I need to implement a way for users to add and view animes in favorites using React's [Context API](https://react.dev/reference/react/useContext).
6. **Custom Hooks:** As an engineer, I should use custom hooks to encapsulate business logic and keep components as simple as possible.
7. **Apply Styles:** As an engineer, I must apply CSS styles to enhance the user experience. Only the use of pure CSS is allowed.

## Technology Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)

## Code Requirements

The use of the following tools is mandatory to ensure code quality and consistency:

- **ESLint:** To ensure consistent coding style and prevent common errors. It should be configured following React community's best practices.
- **Prettier:** To automatically format the code. All project files are expected to be formatted using Prettier.

These tools help maintain a high standard of code quality and are essential for teamwork and project scalability.

## Integration with REST API

This application consumes data from a REST API to retrieve the animes. The API used is `jikan` and can be found [here](https://docs.api.jikan.moe/).

Note: Make sure to review the API documentation to fully understand how to interact with it.

## Recommendations

- **BEM Methodology:** It is recommended to use the BEM methodology for naming CSS classes and maintain a consistent coding style. You can find more information about BEM [here](http://getbem.com/naming/).
