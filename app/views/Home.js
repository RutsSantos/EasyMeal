import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from "../constants/Colors";
import {Storage} from "../constants/Storage";
import { Title, SubTitle } from "../components/Text";
import { Cards } from "../components/Card";
import ActionButton from "../components/ActionButton";
import { DayMeal, ColorCode } from "../components/DayMeal";
import Icon from "react-native-ico";
import {
  getTodayMenu,
  daysOfWeek,
  getTodayNumber,
  getData,
} from "../utils/Helpers";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [todayMenu, setTodayMenu] = useState([]);
  const [name, setName] = useState("");
  useEffect(()=>{
    getData(Storage.USER).then((data)=>setName(data.name));
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={{paddingTop: 60}}>
            <SubTitle text='Bienvenido de vuelta!' color={Colors.ACCENT} size={22} />
            <Title text={name} />
        </View>
        
        <View
          style={{
            flexDirection: "row",
            marginVertical: 40,
          }}>
          <ActionButton
            text='Despensa'
            iconName='photo-camera'
            group="miscellaneous"
            onClick={() => navigation.navigate("Pantry")}
          />
          <ActionButton
            text='Semana'
            iconName='cutlery'
            onClick={() => navigation.navigate("WeekView")}
          />
          <ActionButton
            text='Compras'
            iconName='shopping-cart'
            onClick={() => navigation.navigate("ShoppingList")}
          />
        </View>
        <View>
            <View style={styles.modalContent}>
              <SubTitle size={22} color={Colors.PRIMARY} text='Menú de hoy' />
              <SubTitle
                size={18}
                color={Colors.SECONDARY}
                text={daysOfWeek[getTodayNumber()]}
              />
              <ColorCode />
              {Object.keys(todayMenu).length ? (
                <DayMeal dayFoodList={todayMenu} />
              ) : null}
            </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("New")}>
            <Cards
                background={Colors.PRIMARY}
                color={Colors.WHITE}
                title='Genera un nuevo menú'
                content='Si no estás complacido con las opciones de esta semana, puedes volver a configurar tu menú.'
            />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BG_COLOR,
  },
  content: { 
    backgroundColor: Colors.BG_COLOR,
    paddingHorizontal: 30,
  },
  cardContent: {
    margin: 25,
  },
  modalContent: {
    backgroundColor: Colors.WHITE,
    height: 350,
    width: "100%",
    padding: 30,
    paddingVertical: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
});
