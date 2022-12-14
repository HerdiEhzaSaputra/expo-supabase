import React from "react";
import { View } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RadioButton, CheckBox, Layout, Text } from "react-native-rapi-ui";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const [checkBox, setCheckbox] = React.useState(false);
  const [radioBox, setRadiobox] = React.useState(false);
  return (
    <Layout>
      <View style={{ 
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'row',
        }}
      >
        
      </View>
    </Layout>
  );
}
