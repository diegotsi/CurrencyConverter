import React, { PropTypes } from "React";

import { Text } from "react-native";
import moment from "moment";

import styles from "./styles";

const LastConverted = ({ base, quote, conversionRate, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of
    {moment(date).format("D MMMM YYYY")}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
};
export default LastConverted;
