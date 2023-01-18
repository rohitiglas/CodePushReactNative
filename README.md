# CodePushDemo
A React Native app is composed of JavaScript files and any accompanying images, which are bundled together by the metro bundler and distributed as part of a platform-specific binary (i.e. an .ipa or .apk file). Once the app is released, updating either the JavaScript code (e.g. making bug fixes, adding new features) or image assets, requires you to recompile and redistribute the entire binary, which of course, includes any review time associated with the store(s) you are publishing to.

The CodePush plugin helps get product improvements in front of your end users instantly, by keeping your JavaScript and images synchronized with updates you release to the CodePush server. This way, your app gets the benefits of an offline mobile experience, as well as the "web-like" agility of side-loading updates as soon as they are available. It's a win-win!

In order to ensure that your end users always have a functioning version of your app, the CodePush plugin maintains a copy of the previous update, so that in the event that you accidentally push an update which includes a crash, it can automatically roll back. This way, you can rest assured that your newfound release agility won't result in users becoming blocked before you have a chance to roll back on the server. It's a win-win-win!

Note: Any product changes which touch native code (e.g. modifying your AppDelegate.m/MainActivity.java file, adding a new plugin) cannot be distributed via CodePush, and therefore, must be updated via the appropriate store(s).


## Step1: Open https://appcenter.ms/ and Click on Add New App and create 2 app with React-Native ....1 is for Android and 2 for IOS
## Step2: Open CreatedAndroid App and goto distribuited=>codePush
When you will tap on setting icon , you will see two keys already created one is for production and another is for staging.
You can add your own envirnonment and keys.

We are done with App-center setup for codepush , Now the time to play with our project


## Step3: 

### Open your terminal and goto your Project directory and Install 
```
npm install --save react-native-code-push Or yarn add react-native-code-push 
```
then Run 
```
cd ios && pod install && cd ..
```

## Step4: For IOS 

### 1. Goto your project =>ios folder=> ProjectName=> Open up the AppDelegate.m file, and add an import statement for the CodePush headers:

```

#import <CodePush/CodePush.h>

```

### 2. Find the following line of code, which sets the source URL for bridge for production releases:

```

return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];

```

### 3. Replace it with this line:

```

return [CodePush bundleURL];

```

This change configures your app to always load the most recent version of your app's JS bundle.

### 4. Open Info.plist

```

 <key>CodePushDeploymentKey</key>
  <string>Add your Development/Production key here ......</string> // Add 
  
  ```
  
 
 ## Step5. For Android 
 
 ### 1.In your android/settings.gradle file, make the following additions:
 
 ```
 
 include ':app', ':react-native-code-push'
project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')

```

### 2. In your android/app/build.gradle file, add the codepush.gradle file as an additional build task definition underneath react.gradle:

```

apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"

```

### 3. Update the MainApplication.java file to use CodePush via the following changes:

```

...
// 1. Import the plugin class.
import com.microsoft.codepush.react.CodePush;
public class MainApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        ...
        // 2. Override the getJSBundleFile method to let
        // the CodePush runtime determine where to get the JS
        // bundle location from on each app start
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
    };
}

```

### 4. Add the Deployment key to strings.xml: 

```

 <resources>
     <string name="app_name">AppName</string>
     <string moduleConfig="true" name="CodePushDeploymentKey">DeploymentKey</string>
 </resources>
 
 ```
 
 
 
  # Done with Android/IOS manual setup , Now the time for move to react-native code 
 


## Step:6 Open the Root folder like App.js 
### Option 1: Wrap your root component with the codePush higher-order component:

#### For class component
```
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class MyApp extends Component {
}

MyApp = codePush(codePushOptions)(MyApp);

```
#### For Functional component
```
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

let MyApp: () => React$Node = () => {
}

MyApp = codePush(codePushOptions)(MyApp);

```

Alternatively, if you want fine-grained control over when the check happens (like a button press or timer interval), you can call CodePush.sync() at any time with your desired SyncOptions, and optionally turn off CodePush's automatic checking by specifying a manual checkFrequency:

```

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

class MyApp extends Component {
    onButtonPress() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.onButtonPress}>
                    <Text>Check for updates</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

MyApp = codePush(codePushOptions)(MyApp);

```


## Step7: Store Guideline Compliance

Android Google Play and iOS App Store have corresponding guidelines that have rules you should be aware of before integrating the CodePush solution within your application.

#### Google Play 

Third paragraph of Device and Network Abuse topic describe that updating source code by any method other than Google Play's update mechanism is restricted. But this restriction does not apply to updating javascript bundles.

This restriction does not apply to code that runs in a virtual machine and has limited access to Android APIs (such as JavaScript in a webview or browser).

That fully allow CodePush as it updates just JS bundles and can't update native code part.

#### App Store

Paragraph 3.3.2, since back in 2015's Apple Developer Program License Agreement fully allowed performing over-the-air updates of JavaScript and assets - and in its latest version (20170605) downloadable here this ruling is even broader:

Interpreted code may be downloaded to an Application but only so long as such code: (a) does not change the primary purpose of the Application by providing features or functionality that are inconsistent with the intended and advertised purpose of the Application as submitted to the App Store, (b) does not create a store or storefront for other code or applications, and (c) does not bypass signing, sandbox, or other security features of the OS.

CodePush allows you to follow these rules in full compliance so long as the update you push does not significantly deviate your product from its original App Store approved intent.

To further remain in compliance with Apple's guidelines we suggest that App Store-distributed apps don't enable the updateDialog option when calling sync, since in the App Store Review Guidelines it is written that:

Apps must not force users to rate the app, review the app, download other apps, or other similar actions in order to access functionality, content, or use of the app.

This is not necessarily the case for updateDialog, since it won't force the user to download the new version, but at least you should be aware of that ruling if you decide to show it.

## Releasing Updates

Once your app is configured and distributed to your users, and you have made some JS or asset changes, it's time to release them. The recommended way to release them is using the release-react command in the App Center CLI, which will bundle your JavaScript files, asset files, and release the update to the CodePush server.

NOTE: Before you can start releasing updates, please log into App Center by running the appcenter login command.

In it's the most basic form, this command only requires one parameter: your owner name + "/" + app name.

```
appcenter codepush release-react -a <ownerName>/<appName>

appcenter codepush release-react -a <ownerName>/MyApp-iOS
appcenter codepush release-react -a <ownerName>/MyApp-Android

```

The release-react command enables such a simple workflow because it provides many sensible defaults (like generating a release bundle, assuming your app's entry file on iOS is either index.ios.js or index.js). However, all of these defaults can be customized to allow incremental flexibility as necessary, which makes it a good fit for most scenarios.

```

# Release a mandatory update with a changelog
appcenter codepush release-react -a <ownerName>/MyApp-iOS  -m --description "Modified the header color"

# Release an update for an app that uses a non-standard entry file name, and also capture
# the sourcemap file generated by react-native bundle
appcenter codepush release-react -a <ownerName>/MyApp-iOS --entry-file MyApp.js --sourcemap-output ../maps/MyApp.map

# Release a dev Android build to just 1/4 of your end users
appcenter codepush release-react -a <ownerName>/MyApp-Android  --rollout 25 --development true

# Release an update that targets users running any 1.1.* binary, as opposed to
# limiting the update to exact version name in the build.gradle file
appcenter codepush release-react -a <ownerName>/MyApp-Android  --target-binary-version "~1.1.0"

```














 
 






