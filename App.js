/*
 * @Author: yinyongqian
 * @Description:
 * @LastEditors: yinyongqian
 * @Date: 2019-03-20 10:23:22
 * @LastEditTime: 2019-03-20 11:35:47
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MyWatermarkView from './MyWatermarkView';
// 一般水印样式都是固定的，为了方便使用，可以二次封装，使用 MyWatermarkView 固定参数

export default class App extends Component {
  render() {
    return (
      <MyWatermarkView>
        <View style={{ width: 120, height: 120, backgroundColor: 'red' }}></View>
        <View style={{ width: 120, height: 120, backgroundColor: 'orange' }}></View>
        <View style={{ width: 120, height: 120, backgroundColor: 'yellow' }}></View>
        <View style={{ width: 120, height: 120, backgroundColor: 'green' }}></View>
      </MyWatermarkView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
