import * as React from "react";
import {TextInput, View, StyleSheet} from "react-native";
import Text from "react-native-elements/src/text/Text";
import Button from "react-native-elements/src/buttons/Button";
import { Bar } from 'react-native-pathjs-charts'
import firebase from "firebase";


export class DiagnosisChart extends React.Component {
    constructor() {
        super();
        this.name = '';
        this.content = '';
    }

    render() {
        let data =[
            [{
                "v": 49,
                "name": "faringita"
            }, {
                "v": 42,
                "name": "toxi infectie alimentara"
            },
                {
                    "v": 69,
                    "name": "infecte piele"
                }],
        ];


        let options = {
            width: 300,
            height: 300,
            margin: {
                top: 20,
                left: 25,
                bottom: 50,
                right: 20
            },
            color: '#2980B9',
            gutter: 20,
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            axisX: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'bottom',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#34495E',
                    rotate: 45
                }
            },
            axisY: {
                showAxis: true,
                showLines: true,
                showLabels: true,
                showTicks: true,
                zeroAxis: false,
                orient: 'left',
                label: {
                    fontFamily: 'Arial',
                    fontSize: 8,
                    fontWeight: true,
                    fill: '#F86FA3'
                }
            }
        };
       // const {goBack} = this.props.navigation;
      //  const {item} = "Saptamana curenta";
        //const {refresh} = this.props.navigation.state.params;
        this.name = "nume";
        this.content = "banana";

        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>
                    Diagnosis flow
                </Text>


                <Bar data={data} options={options} accessorKey='v'/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#57AEA3",
    },
});