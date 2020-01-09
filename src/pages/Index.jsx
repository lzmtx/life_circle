/**
 * 页面公共模块-导航栏加不同的内容
 */
import React, { Component } from 'react'
import IndexBottomMenu from '../components/IndexBottomMenu'

export default class Index extends Component {
  render () {
    return (
      <div id="index">
        {this.props.children}
        <div id="bottomMenu">
          <IndexBottomMenu />
        </div>
      </div>
    )
  }
}
