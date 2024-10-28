

# 🎬 Noxe Movie App

The Noxe Movie App is a movie and TV show discovery platform built with **React.js**. It features user authentication, protected routes, and a user-friendly interface to browse movie details, TV shows, and actors.

## 🚀 Features

- **User Registration & Login**: Secure registration and login forms to onboard users.
- **Protected Routes**: Access control based on user authentication, ensuring only registered users can view certain content.
- **Dynamic Navbar**: Navigation adapts based on user login status.
- **Browse Movies & TV Shows**: Explore a curated list of movies and TV shows with detailed pages.
- **Detailed View**: Access in-depth details for each movie, TV show, or person.
- **Responsive Design**: Optimized for various devices and screen sizes.

## 🛠️ Technologies Used

- **React.js**: Core framework for UI components and rendering.
- **React Router**: For routing and protected routes based on user authentication.
- **JWT**: JSON Web Tokens for secure user sessions.
- **CSS**: Custom styling for an engaging UI.



## ⚙️ Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/NourAlaassarr/Noxe-Movie-App.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd Noxe-Movie-App
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm start
    ```

The app will be accessible at `http://localhost:3000`.

## 🔐 Authentication & Protected Routes

- The app uses **JWT** for secure authentication.
- User data is stored in localStorage to persist the login state.
- Only authenticated users can access certain routes (e.g., MovieDetails, TV Details, People, Network).

## 🌟 Key Components

- **Navbar**: Displays different options based on the user’s login status.
- **Registration & Login**: Forms to create an account and log in.
- **Movie and TV Show Listings**: Browse and access detailed information.
- **Protected Route**: Restricts access to authenticated users.

## 🤝 Contributions

Feel free to fork this project, create issues, or submit PRs. All contributions are welcome!


