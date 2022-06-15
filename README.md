## Hosting landing page

- (https://unstoppabledomains.com/)[url]
- IPFS powers of the ditributed web
  - A peer-to-peer hypermedia protocol deesigned to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.
  - A compleltely decentralized peer to peer protocol.

## Technologies

- FRONTEND
- react nativ
  - (https://reactnative.dev/)[url]
- next.js

- BACKEND
- Sanity

## Buying Domains

- unstopable domains
- can buy completely decentralized internet domains
  - like:
  - .crypto, .x, .nft, .wallet. 100% owned by you
- once you buy tne domain name. its minted as an nft and its yours forever.

# using expo cli with react native

- initial setup
- must have node setup
- installs:
  - npm install -g expo-cli
  - npm install @react-navigation/native @react-navigation/stack expo-font expo-updates react-native-gesture-handler react-native-safe-area-context

## initializing new project

- in terminal
  - expo init AwesomeProject
    - This was not working saying: Line 1 command not found. so to I tried a different way to make it work which was : npx expo init ./. This was found (https://github.com/expo/expo-cli/discussions/590)[url] by matthewboman on may 8, 2019
    - REVISITED: expo init ./ actually works in the windows cmd cli, just not on gitbash.
- now it starts up. i hit return on the first bare clean workspace. and npm start
- ctrl left click the: Developer tools running on http://localhost:19002
- it will open a new tab or window and show like a dash board.
- itll show a qr code that you can scan with your mobile device.

## App.js

- we dont have access to View by default, every native component has to be imported at the top.
- View is like a div
- Text is like a paragraph tag
- in our app we can delete the native components
- think of this as using react-router in your basic react app
- were using @react-navigation (https://reactnavigation.org/)[url] && think of this as react-router

## About react-native

- FlatList basically renders the component list similar to map in react
  it renders items only when theyre about to appear on the screen
  and it deletes them when they are off view. that lowers the memory usage
  therefor it uses lazy loading for better optimisation.
- SafeArea component is used to render content within the safe area boundaries
  of our device. to make sure that everything fits on the screen
## Constants
- this folder contains imports for all of our assets
- and all of our dummy data
- keyExtractor is similar to passing a key to a mapped element in react

## Creating a landing page/show case page for mobile app
- File is seperate react app and is named nft_show_case
### installing dependancies
[tailwind css link](https://tailwindcss.com/docs/guides/create-react-app)
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

## publish
- npx expo publish 
  - grab link
  - https://expo.dev/@chamon562/nft_market?serviceType=c
lassic&distribution=expo-go
## to see mobile app
- User must download Expo Go from an app store.
- open this link: [https://expo.dev/@chamon562/nft_market?serviceType=c](url), will send users to a qr code.
- Open Expo Go and pres Scan Qr Code and scan the qr code shown in the link above.