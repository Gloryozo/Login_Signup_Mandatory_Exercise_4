import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const Image = () => (
  <View style={{ 
    position: 'absolute', 
    top: 20, 
    right: 20, 
    zIndex: 1,
    width: 150,
    height: 150
  }}>
    <Svg viewBox="0 0 200 200">
      <Path
        fill="#F97316"
        d="M45.2,-65.4C58.2,-54.3,68.1,-39.7,73.4,-23.3C78.7,-6.8,79.5,11.5,73.5,26.5C67.5,41.5,54.8,53.3,40.2,62.8C25.6,72.3,9.1,79.5,-7.5,88.6C-24.1,97.7,-40.3,108.7,-52.5,102.1C-64.7,95.6,-72.9,71.6,-77.8,49.3C-82.7,27,-84.3,6.5,-79.5,-10.6C-74.7,-27.7,-63.5,-41.5,-50.1,-53.2C-36.7,-64.9,-21.1,-74.5,-3.1,-70.9C14.8,-67.3,29.7,-50.5,45.2,-65.4Z"
        transform="translate(100 100)"
      />
    </Svg>
  </View>
);