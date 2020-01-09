/**
 * 商城首页
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Index from './Index'
import '../assets/css/home.css'
import HomeMenuNavItem from '../components/HomeMenuNavItem'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search_city: "杭州",
      search_input_value: "",
      search_input_placeholder: "搜索附近热门的咖啡馆",
      news_title: "城西广场美食节活动3折起，持续5天！"
    }
    this.NearbyCardNodes = this.setNearbyCard()
    this.recommendBarItem = this.setRecommendBarItem()
    this.recommendCard = this.setRecommendCard()
  }
  setNearbyCard = () => {
    let nearbyData = [
      { shop_name: "必胜客阳光路店", label: "5元代金卷", url: "/" },
      { shop_name: "星巴克西城广场店", label: "6元代金卷", url: "/" },
      { shop_name: "麦当劳丰庆西路店", label: "9.5折", url: "/" },
      { shop_name: "必胜客杨云路店", label: "8元代金卷", url: "/" }
    ]
    return nearbyData.map((item, index) => {
      ++index
      return (
        <div key={index} className="card">
          <Link className="card_item" to={item.url}>
            <img src={require("../assets/images/home/shop_img/0" + index + ".png")} alt="" />
            <span className="shop_title">{item.shop_name}</span>
            <span className="shop_label">{item.label}</span>
          </Link>
        </div>
      )
    })
  }
  setRecommendBarItem = () => {
    let recommendBarItemData = [
      { bar_item_name: "餐厅", url: "/" },
      { bar_item_name: "咖啡", url: "/" },
      { bar_item_name: "甜品", url: "/" },
      { bar_item_name: "茶饮", url: "/" },
      { bar_item_name: "酒店", url: "/" },
      { bar_item_name: "展览", url: "/" },
      { bar_item_name: "书店", url: "/" },
    ]

    return recommendBarItemData.map(item => {
      return (
        <Link key={item.bar_item_name} className="option_item" to={item.url}>{item.bar_item_name}</Link>
      )
    })
  }
  setRecommendCard = () => {
    let recommendCardData = [1, 2, 3, 4, 5]
    return recommendCardData.map((item, index) => {
      return (
        <Link
          key={index}
          className="recommend_card"
          to="/">
          <img src={require("../assets/images/home/001.png")} alt="" />
        </Link>
      )
    })
  }


  searchInputValueChange = (e) => {
    this.setState({ search_input_value: e.target.value })
  }
  render () {
    return (
      <Index>
        <div className="search">
          <div className="city">{this.state.search_city}</div>
          <div className="search_input_box">
            <input
              type="text"
              value={this.state.search_input_value}
              onChange={this.searchInputValueChange}
              placeholder={this.state.search_input_placeholder} />
          </div>
          <div className="scan"></div>
        </div>
        <div className="home_banner"></div>
        <section className="home_menu_nav"><HomeMenuNavItem /></section>
        <div className="news_bar">
          <div className="bar_title">圈内咨询</div>
          <div className="news_title">{this.state.news_title}</div>
        </div>
        <section name="home_nearby" className="nearby">
          <div className="top">
            <span className="title">在你附近</span>
            <span className="option">500m以内</span>
          </div>
          <div className="card_box">
            {this.NearbyCardNodes}
          </div>
        </section>
        <section name="home_nearby" className="nearby recommend">
          <div className="top">
            <span className="title">为你推荐</span>
            <span className="option">
              {this.recommendBarItem}
            </span>
          </div>
          <div className="recommend_card_box">{this.recommendCard}</div>

        </section>

      </Index>
    )
  }
}
