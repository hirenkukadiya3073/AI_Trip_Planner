# AI_Trip_Planner

AI Trip Planner is an intelligent travel planning application built with React.js and Firebase, designed to create personalized trip plans and show detailed place information. With Firebase for user authentication and data storage, along with Gemini and Google Maps APIs for trip generation and place details, the app is perfect for users who want a smooth, comprehensive trip-planning experience.

## Features

- **User Authentication**: Secure login and signup using Firebase.
- **Custom Trip Suggestions**: Trip itineraries generated using the Gemini API.
- **Place Photos and Information**: Google Maps API provides location photos and details.
- **Real-Time Database**: Firebase stores user trip details and preferences.

## Tech Stack

- **Frontend**: React.js
- **Backend/Database**: Firebase (Auth and Firestore Database)
- **APIs**:
  - **Firebase Auth**: Manages authentication.
  - **Gemini API**: Generates travel itineraries based on user preferences.
  - **Google Maps API**: Provides photos and information for places.

## Setup Instructions

### Prerequisites

- [Node.js and npm](https://nodejs.org/) installed on your system
- Firebase, Gemini, and Google Maps API keys

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/ai-trip-planner.git
    cd ai-trip-planner
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your API keys to the `.env` file:
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     REACT_APP_GEMINI_API_KEY=your_gemini_api_key
     REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

4. **Start the Development Server**:
    ```bash
    npm start
    ```
   The app will be available locally at `http://localhost:3000`.

## Usage

- **Login/Signup**: Users can sign up or log in using Firebase authentication.
- **Generate Trip**: Enter a destination and preferences to receive a customized trip itinerary from the Gemini API.
- **View Place Details**: Select a place to view photos and detailed information provided by Google Maps.

## Project Structure

- **/src**: Contains all React components.
- **/src/services**: API integration code.
- **/public**: Static assets for the project.
- **/src/App.js**: Main application component.

## Screenshots


## Contributing

Contributions are welcome! Please feel free to submit issues or open a pull request.


Enjoy using the AI Trip Planner! Plan your perfect trip with ease.
