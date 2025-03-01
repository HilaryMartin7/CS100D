import { Text, View } from "react-native";

import { styles } from '@/app/styles';
import Calculator from '@/components/calculator';

export default function Index() {
  return (
    <View
      style={styles.mainBody}
    >
       <Calculator />
    </View>
  );
}