import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const MyButton = () => {
  const [showMainBox, setShowMainBox] = useState(false);
  const [showNestedBox, setShowNestedBox] = useState(false);

  const handleMainBoxPress = () => {
    setShowMainBox(!showMainBox);
  };

  const handleNestedBoxPress = () => {
    setShowNestedBox(!showNestedBox);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.mainButton} onPress={handleMainBoxPress}>
        <Text style={styles.buttonText}>{showMainBox ? 'Close Main Box' : 'Open Main Box'}</Text>
      </Pressable>

      {showMainBox && (
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Main Box</Text>
          <Pressable style={styles.nestedButton} onPress={handleNestedBoxPress}>
            <Text style={styles.buttonText}>{showNestedBox ? 'Close Nested Box' : 'Open Nested Box'}</Text>
          </Pressable>
          {showNestedBox && (
            <View style={styles.nestedBox}>
              <Text style={styles.boxTitle}>Nested Box</Text>
              {/* Content of the nested box */}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  nestedButton: {
    width: 150,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  box: {
    padding: 16,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginTop: 8,
  },
  nestedBox: {
    padding: 16,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    marginTop: 8,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MyButton;
