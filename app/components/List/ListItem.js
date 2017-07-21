import React, { PropTypes } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import Icon from "./Icon";
import styles from "./styles";

const ListItem = ({
  text,
  onPress,
  selected = false,
  checkmark = true,
  visible = true
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool
};
export default ListItem;
