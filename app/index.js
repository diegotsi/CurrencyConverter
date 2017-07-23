import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import Navigator from "./config/routes";
import { AlertProvider } from "./components/Alert";
import store from "./config/store";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",

  $white: "#fff",
  $border: "#E2E2E2",
  $darkText: "#343434",
  $inputText: "#797979",
  $lightGray: "#f0f0f0"
});

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
