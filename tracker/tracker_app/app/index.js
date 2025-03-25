import { Text, View, Pressable, TextInput } from "react-native";
import { useState } from 'react';
import axios from 'axios';

import { styles } from '@/app/styles';

export default function Index() {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState('')
  const [userCount, setUserCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const urlbase = 'https://tracker-service.e9g15cf6m7ada.us-west-2.cs.amazonlightsail.com/';

  const handleResetDB = () => {
    const url = urlbase + '/resetdb'
    axios.get(url).then((resp) => {
      alert(resp.data)
    })
  }
  const handleLogin = () => {
    var url = '/login'
    const body = {'user': userName}
    const headers = { "Content-Type": "application/json" }
    const config = {
        url: url,
        baseURL: urlbase,
        method: 'POST',
        headers: headers,
        data: body
    }
    axios(config).then((resp) => {
      setUser(userName);
      setUserCount(resp.data['user count'])
      setTotalCount(resp.data['total count'])
    }).catch(error => {
        console.log(error)
    })
  }

  return (
    <View
      style={styles.mainBody}
    >
      <Pressable>
          <Text style={styles.loginButton} onPress={handleResetDB}>Reset DB</Text>
      </Pressable>

      {user.length > 0 && 
        <View>
          <Text style={styles.displayLabel}>User: {user}</Text>
          <Text style={styles.displayLabel}>Login Count: {userCount}</Text>
          <Text style={styles.displayLabel}>Total Logins: {totalCount}</Text>
        </View>
      }
      <TextInput style={styles.loginInput} value={userName} placeHolder='User Name' onChangeText={setUserName}></TextInput>
      <Pressable>
          <Text style={styles.loginButton} onPress={handleLogin}>Login</Text>
      </Pressable>
    </View>
  );
}
