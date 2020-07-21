import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View stle={styles.button}>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    buttonText:{
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
    }
});

export default MainButton;
