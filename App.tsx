import React, {useEffect, useState, FC} from 'react';
import CodePush from 'react-native-code-push';
import {Modal, View, Text, ActivityIndicator} from 'react-native';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};

interface Progress {
  name: boolean | object;
}

const App = () => {
  const [progress, setProgress] = useState(false);

  // React.useEffect(()=>{
  //   Sentry.nativeCrash();
  // },[]);

  useEffect(() => {
    CodePush.sync(
      {
        updateDialog: true,
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      codePushStatusDidChange,
      codePushDownloadDidProgress,
    );
  }, []);

  const codePushStatusDidChange = syncStatus => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log('syncStatus message', 'Checking for update.');

        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log('syncStatus message', 'Downloading package.');

        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        console.log('syncStatus message', 'Awaiting user action.');

        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        console.log('syncStatus message', 'Installing update.');

        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        console.log('syncStatus message', 'App up to date.');
        // setProgress(false);
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        console.log('syncStatus message', 'Update cancelled by user.');
        // setProgress(false);
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        console.log(
          'syncStatus message',
          'Update installed and will be applied on restart.',
        );
        // setProgress(false);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        console.log('syncStatus message', 'An unknown error occurred.');
        // setProgress(false);
        break;
    }
  };

  const codePushDownloadDidProgress = progress => {
    setProgress(progress);
  };

  const showProgressModal = () => {
    return (
      <Modal visible={true} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
            width: '100%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 8,
              padding: 16,
            }}>
            <Text>In Progress.......</Text>

            <View style={{alignItems: 'center'}}>
              <Text style={{marginTop: 16}}>{`${(
                Number(progress?.receivedBytes) / 1048576
              ).toFixed(2)}MB/${(
                Number(progress?.totalBytes) / 1048576
              ).toFixed(2)}`}</Text>
              <ActivityIndicator style={{marginVertical: 8}} color={'blue'} />
              <Text>
                {(
                  (Number(progress?.receivedBytes) /
                    Number(progress?.totalBytes)) *
                  100
                ).toFixed(0)}
                %
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  console.log('Progress Value is =====', progress);

  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Text style={{fontSize: 80, margin: 40, textAlign: 'center'}}>BBK</Text>

      {!!progress ? showProgressModal() : null}
    </View>
  );
};

export default CodePush(codePushOptions)(App);
