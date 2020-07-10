import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
4;
const styles = StyleSheet.create({
  header: {
      width: '100%',
      height: 90,
      paddingTop: 36,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
  },
  headerTitle: {
      color: 'black',
      fontSize: 28,
  },
});

export default Header;
