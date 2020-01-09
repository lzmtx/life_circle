/**
 * 首页小菜单项
 */
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class HomeMenuNavItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        [
          { navText: "餐厅", url: "/1" },
          { navText: "咖啡", url: "/" },
          { navText: "甜品", url: "/" },
          { navText: "茶饮", url: "/" }
        ],
        [
          { navText: "酒店", url: "/" },
          { navText: "展览", url: "/2" },
          { navText: "书店", url: "/" },
          { navText: "更多", url: "/" }
        ]
      ]
    }
    this.items = this.setNav()
  }

  setNav = () => {
    return this.state.navList.map((item, index) => {
      ++index
      return (
        <div key={index} className="nav_row">
          {setNavItem(item, index)}
        </div>
      )
    })

    function setNavItem (itemArr = [], startIndex) {
      return itemArr.map((item, index) => {
        index = ++index * startIndex
        return (
          <Link className="nav_item" key={item.navText} to={item.url}>
            <img src={require("../assets/images/home/menu_icon/0" + index + ".png")} alt="" />
            <span>{item.navText}</span>
          </Link>
        )
      })
    }
  }

  render () {
    return (
      <Fragment>
        {this.items}
      </Fragment>
    )
  }
}
