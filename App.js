import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import store from './src/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

// import React from 'react';
// import {SafeAreaView, View, KeyboardAvoidingView} from 'react-native';
// import {Text, TextInput} from 'components';
// import Button from './components/src/button/Button';

// const App = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior="position"
//       contentContainerStyle={{flex: 1}}
//       style={{flex: 1}}
//       keyboardVerticalOffset={0}>
//       <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
//         <View style={{height: 500}}>
//           <Text variant="body1" style={{color: '#fff'}}>
//             Hello How are you?
//           </Text>
//         </View>
//         <View>
//           <TextInput label="Username" />
//           <TextInput label="Password" />
//           <Button
//             title="Login"
//             onPress={() => {}}
//             style={{
//               backgroundColor: 'rgb(255,255,0)',
//             }}
//             underlayColor="rgba(255,255,0, 0.3)"
//           />
//         </View>
//       </SafeAreaView>
//     </KeyboardAvoidingView>
//   );
// };

// export default App;
