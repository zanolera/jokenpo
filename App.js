/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Topo from "./src/components/topo";
import Icone from "./src/components/icone";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: "", escolhaComputador: "", resultado: "" };
  }

  jokenpo(escolhaUsuario) {
    let numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = "",
      resultado = "";
    const empate = "Empate",
      usuarioGanhou = "Você Ganhou",
      usuarioPerdeu = "Você Perdeu";

    switch (numAleatorio) {
      case 0:
        escolhaComputador = "pedra";
        break;
      case 1:
        escolhaComputador = "papel";
        break;
      case 2:
        escolhaComputador = "tesoura";
        break;
    }

    if (escolhaComputador == "pedra") {
      if (escolhaUsuario == escolhaComputador) {
        resultado = empate;
      } else if (escolhaUsuario == "papel") {
        resultado = usuarioGanhou;
      } else {
        resultado = usuarioPerdeu;
      }
    }
    if (escolhaComputador == "papel") {
      if (escolhaUsuario == escolhaComputador) {
        resultado = empate;
      } else if (escolhaUsuario == "tesoura") {
        resultado = usuarioGanhou;
      } else {
        resultado = usuarioPerdeu;
      }
    }
    if (escolhaComputador == "tesoura") {
      if (escolhaUsuario == escolhaComputador) {
        resultado = empate;
      } else if (escolhaUsuario == "pedra") {
        resultado = usuarioGanhou;
      } else {
        resultado = usuarioPerdeu;
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: resultado
    });
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button
              title="pedra"
              onPress={() => {
                this.jokenpo("pedra");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={() => {
                this.jokenpo("papel");
              }}
            />
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={() => {
                this.jokenpo("tesoura");
              }}
            />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  palco: {
    alignItems: "center",
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    height: 50,
    marginTop: 10
  }
});
