import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  Button,
  FlatList,
  View,
  PixelRatio,
  NativeModules,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Text} from 'components';

NativeModules.

const LandingPage = ({navigation: {navigate}}) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchData = useCallback(async () => {
    console.warn('fetchData');
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=${limit}`,
    );
    const dta = await res.json();
    setData([...data, ...dta]);
  }, [data, page]);

  const onEndReached = () => {
    setPage(page + 1);
    fetchData();
  };

  const renderItem = ({item, index}) => (
    <View style={{margin: 10, flexDirection: 'row'}}>
      <FastImage
        source={{uri: item.thumbnailUrl}}
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(30),
          width: PixelRatio.getPixelSizeForLayoutSize(30),
        }}
      />
      <Text variant="body1" style={{flex: 1, padding: 10}}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        removeClippedSubviews={true}
        maxToRenderPerBatch={15}
        windowSize={14}
        onEndReached={onEndReached}
        keyExtractor={item => `${item.id}`}
      />
      {/* <Button title="Go to Login" onPress={() => navigate('Login')} /> */}
    </SafeAreaView>
  );
};

export default LandingPage;
