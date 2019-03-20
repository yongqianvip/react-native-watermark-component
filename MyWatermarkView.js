/*
 * @Author: yinyongqian
 * @Description:
 * @LastEditors: yinyongqian
 * @Date: 2019-03-20 11:13:04
 * @LastEditTime: 2019-03-20 12:08:59
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { WatermarkView } from './src/index';

class MyWatermarkView extends React.Component {
  render() {
    const {
      watermark = '朋友 · 爱',
      style = styles.container,
      itemWidth = 100,
      itemHeight = 100,
      rotateZ = -45,
      watermarkTextStyle = styles.watermarkTextStyle
    } = this.props;
    return (
      <WatermarkView
        foreground
        watermark={watermark}
        style={style}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        rotateZ={rotateZ}
        watermarkTextStyle={ watermarkTextStyle }
      >
        {this.props.children}
      </WatermarkView>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  watermarkTextStyle: {

  }
})

export default MyWatermarkView

