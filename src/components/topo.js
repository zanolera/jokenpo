import React, { Component } from "react";
import { View, Image } from "react-native";

class Topo extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#27b4e5'}}>
        <Image source={require("../../imgs/jokenpo.png")} />
      </View>
    );
  }
}

export default Topo;
