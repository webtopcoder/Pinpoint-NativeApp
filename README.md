# paypoint app

This project is a React Native application developed using the Expo framework. This guide will help you set up and run the app on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: Download and install from [Node.js official website](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI by running the following command in your terminal:

  ```bash
  npm install -g expo-cli
  ```

## Getting Started

Follow these steps to set up and run the app:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/webtopcoder/Pinpoint-NativeApp
   cd Pinpoint-NativeApp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the Expo server:**

   ```bash
   expo start
   ```

   This command will start the Expo development server and open the Expo DevTools in your browser.

## Running the App

You have multiple options to run your app:

### On Your Mobile Device

1. **Download the Expo Go app:**

   - For **iOS**, download from the [App Store](https://apps.apple.com/app/apple-store/id982107779).
   - For **Android**, download from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).

2. **Open Expo Go and scan the QR code** from Expo DevTools in your browser.

### On an Emulator

1. **For iOS** (requires a Mac with Xcode installed):

   - Open Xcode and set up an iOS simulator.
   - In Expo DevTools, click on `Run on iOS simulator`.

2. **For Android**:

   - Make sure you have Android Studio installed and set up an Android Virtual Device (AVD).
   - In Expo DevTools, click on `Run on Android device/emulator`.

## Debugging

- **Using React Native Debugger**: You can use React Native Debugger to debug your app. Install it from [here](https://github.com/jhen0409/react-native-debugger).
- **Using Expo DevTools**: Expo DevTools provides various debugging options and tools.

## Building the App

To create a production build of your app, use the following command:

```bash
expo build:android
```

or

```bash
expo build:ios
```

Follow the instructions provided by Expo to generate your app builds.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
