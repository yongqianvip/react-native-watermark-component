/*
 * @Author: yinyongqian
 * @Description:
 * @LastEditors: yinyongqian
 * @Date: 2019-03-20 10:25:35
 * @LastEditTime: 2019-03-20 12:37:14
 */

import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class WatermarkView extends React.Component {
  constructor(props) {
    super(props);
    this.renderWatermark = this.renderWatermark.bind(this);
  }

  static propTypes = {
    foreground: PropTypes.bool,
    style: ViewPropTypes.style,
    watermark: PropTypes.string,
    itemWidth: PropTypes.number,
    itemHeight: PropTypes.number,
    watermarkTextStyle: Text.propTypes.style,
    rotateZ: PropTypes.number
  }

  renderWatermark() {
    const { watermark='', itemWidth=160, itemHeight=100, watermarkTextStyle, rotateZ = -45 } = this.props;
    if (typeof watermark != 'string' || (typeof watermark == 'string' && watermark.length < 1)) {
      return null;
    }
    const items = new Array()
    for (let index = 0; index < parseInt(WIDTH / itemWidth) * parseInt(HEIGHT / itemHeight); index++) {
      const item = (
        <View
          key={'watermark_item' + index}
          style={[styles.watermarkItem, { width: itemWidth, height: itemHeight, transform: [{ rotateZ: rotateZ+'deg' }] }]}
        >
          <Text style={[{ color: 'rgba(0,0,0,0.2)', fontSize: 20 }, watermarkTextStyle]}>{watermark}</Text>
        </View>
      )
      items.push(item);
    }
    return (
      <View style={styles.watermarkContainer} pointerEvents={'none'}>
        {items}
      </View>
    )
  }

  render() {
    const { foreground, style } = this.props;
    return (
      <View style={[styles.container, style, { overflow: 'hidden' }]}>
        {!foreground ? this.renderWatermark() : null}
        {this.props.children}
        {foreground ? this.renderWatermark() : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  watermarkContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  watermarkItem: {
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default WatermarkView;
