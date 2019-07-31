import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';


export default class Barang extends Component{
  constructor(props){
    super(props);
    this.state = {
      barang:"",
      jumlah:0
    };

  }

  handleBarang = (e) =>{
    {this.setState({barang:e})}
  }

  handleJumlah = (e) => {
    {this.setState({jumlah:e})}
  }

  render(){
    return(
      <View>
        <TextInput onChangeText={this.handleBarang} placeholder="Masukan Nama Barang " value={this.state.barang}/>
        <TextInput onChangeText={this.handleJumlah} placeholder="Masukan Jumlah Barang " keyboardType="numeric" value={this.state.jumlah}/>
        <Text>{this.props.namabelanja}</Text>
        <Text>Nama Barang : {this.state.barang}</Text>
        <Text>Jumlah Barang : {this.state.jumlah}</Text>
      </View>
    )
  }
};
