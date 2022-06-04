/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import TaskDatabase from '../../Database/TaskDatabase';
import { Button } from 'react-native-paper';

export default class Camera extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
            color="#0F5929"
            labelStyle={{color: '#fff'}}
            mode="contained"
          >
            Tirar foto
          </Button>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const db = new TaskDatabase();
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      CameraRoll.save(data.uri);
      db.SetDataUri(data.uri);
      console.log('Image saved successfully!');

    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 10,
  },
});
