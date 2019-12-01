import {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();
const defaultPixel = 2;

const defaultW = Platform.OS === 'ios' ? 375 : 411;
const defaultH = Platform.OS === 'ios' ? 667 : 731;
const w2 = defaultW / defaultPixel;
const h2 = defaultH / defaultPixel;
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);

export function normalizeFont(size) {
  return Math.round((size * scale) / fontScale);
}

export function normalize(size) {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size;
      // iphone 6-6s
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size;
}

const styles = StyleSheet.create({
  body1: {
    fontSize: normalize(16),
    fontWeight: '500',
    lineHeight: 20,
  },
  h1: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    lineHeight: 26,
  },
  buttonText: {
    fontSize: normalize(18),
    fontWeight: '500',
  },
  label: {
    fontSize: normalize(15),
    fontWeight: '600',
  },
});

export default styles;
