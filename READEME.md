## Getting Started with WoofLove

### Step 1: Setting Up Expo

1. **Install Expo CLI:**

   ```bash
   npm install -g expo-cli
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

### Step 2: Testing on Mobile

1. **Download Expo Go App:**

   - For [iOS](https://apps.apple.com/us/app/expo-go/id982107779)
   - For [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Run the App:**

   ```bash
   npm start
   ```

3. **Scan QR Code:**
   - Open Expo Go and scan the QR code from the terminal to launch the app on your mobile device.

## Removing `node_modules` and Why It's Necessary

### Step 3: Cleanup (if needed)

1. **Remove `node_modules`:**

   ```bash
   rm -rf node_modules
   ```

   - Or on Windows:
     ```bash
     rmdir /s /q node_modules
     ```

2. **Reinstall Dependencies:**
   ```bash
   npm install
   ```

**Why?** Removing `node_modules` and reinstalling ensures a clean environment with the latest dependencies. It helps resolve potential conflicts and ensures a fresh start.

## Starting WoofLove

### Step 4: Launching the App

1. **On iPhone:**

   - Ensure you have [Xcode](https://apps.apple.com/us/app/xcode/id497799835) installed.

   ```bash
   npm start ios
   ```

2. **On Android:**

   - Ensure you have [Android Studio](https://developer.android.com/studio) installed.

   ```bash
   npm start android
   ```

3. **On Simulator:**
   - Choose iOS or Android in the Expo DevTools, and click on "Run on iOS simulator" or "Run on Android device/emulator."

That's it! You're ready to experience WoofLove on your device or simulator.
