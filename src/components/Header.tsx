import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUsername(user!);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>

      <Image
        style={styles.image}
        source={{ uri: 'http://github.com/allexis096.png' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  username: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
    textTransform: 'capitalize',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
