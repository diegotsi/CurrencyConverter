import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Options from "./screens/Options";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $white: "#fff",
  $border: "#E2E2E2",
  $darkText: "#343434",
  $inputText: "#797979",
  $lightGray: "#f0f0f0"
});

export default () => <Options />;
