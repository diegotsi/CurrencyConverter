import React from "react";
import { StatusBar, View } from "react-native";

import { Container } from "../components/Container";
import { Logo } from "../components/Logo";

export default () => (
  <Container>
    <Logo />
    <StatusBar translucent={false} barStyle="light-content" />
  </Container>
);
