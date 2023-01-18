import React, {ReactElement, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
// import {AppLoading} from 'expo';
// import {Asset} from 'expo-asset';
// import * as Font from "expo-font";

// export type FontSource = Parameters<typeof Font.loadAsync>[0];
// const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
//   useEffect(() => {
//     (async () => {
//       await Promise.all(promises);
//       cb();
//     })();
//   });

const useLoadAssets = (assets: number[], fonts: any): boolean => {
  const [ready, setReady] = useState(false);
  // usePromiseAll(
  //   [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
  //   () => setReady(true)
  // );
  return ready;
};

interface LoadAssetsProps {
  fonts?: any;
  assets?: number[];
  children: ReactElement | ReactElement[];
}

export default ({assets, fonts, children}: LoadAssetsProps) => {
  const ready = useLoadAssets(assets || [], fonts || {});
  if (!ready) {
    return <ActivityIndicator />;
  }
  return <>{children}</>;
};
