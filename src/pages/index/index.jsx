import Taro, { Component } from "@tarojs/taro";
import { View, Text, Input, Button } from "@tarojs/components";
import "./index.less";
import Result from "./result";
export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页"
  };
  state = {
    month: "",
    day: "",
    isShow: false,
    firstWord: "",
    secondWord: "",
    months: [
      ["1", "长"],
      ["2", "栓"],
      ["3", "狗"],
      ["4", "来"],
      ["5", "大"],
      ["6", "守"],
      ["7", "傻"],
      ["8", "福"],
      ["9", "龟"],
      ["10", "二"],
      ["11", "胖"],
      ["12", "臭"]
    ],
    days: [
      ["1", "芳"],
      ["2", "妮"],
      ["3", "剩"],
      ["4", "娣"],
      ["5", "球"],
      ["6", "坑"],
      ["7", "根"],
      ["8", "岁"],
      ["9", "娃"],
      ["10", "毛"],
      ["11", "歪"],
      ["12", "姑"],
      ["13", "英"],
      ["14", "妹"],
      ["15", "肥"],
      ["16", "霞"],
      ["17", "狗"],
      ["18", "虎"],
      ["19", "花"],
      ["20", "凤"],
      ["21", "腚"],
      ["22", "村"],
      ["23", "蛋"],
      ["24", "妞"],
      ["25", "木"],
      ["26", "翠"],
      ["27", "爱"],
      ["28", "财"],
      ["29", "头"],
      ["30", "胖"],
      ["31", "发"]
    ]
  };
  setMonth = e => {
    this.setState({
      month: e.target.value
    });
  };
  setDay = e => {
    this.setState({
      day: e.target.value
    });
  };
  predict = () => {
    if (this.state.month && this.state.day) {
      for (var i = 0; i < this.state.months.length; i++) {
        if (this.state.month === this.state.months[i][0]) {
          this.setState({
            firstWord: this.state.months[i][1]
          });
          for (var j = 0; j < this.state.days.length; j++) {
            if (this.state.day === this.state.days[j][0]) {
              this.setState({
                isShow: true,
                secondWord: this.state.days[j][1]
              });
            }
          }
        }
      }
    } else {
      Taro.showToast({
        title: "请先输入月份和日期",
        icon: "none",
        duration: 2000
      });
    }
  };
  close=()=>{
    this.setState({
      isShow:false
    })
  
  }
  render() {
    return (
      <View className="index">
        <View className="head">
          在农村，据说给刚出生的孩子起个贱名，孩子容易养活，而且一生都会比较顺利。输入你农历出生的月份和日期确定你的贱名吧!
        </View>
        <View className="inputs">
          <View className='ainput'>
          月份:<Input onInput={this.setMonth} className='myinput'></Input>
          </View>
        <View className='ainput'>
        日期:<Input onInput={this.setDay} className='myinput'></Input>
        </View>
        
        </View>
        
        {this.state.isShow? (
          <Result
            firstWord={this.state.firstWord}
            secondWord={this.state.secondWord}
            close={this.close.bind(this)}
          ></Result>
        ) : null}
        <Button onClick={this.predict} className="prediction">测一测</Button>
      </View>
    );
  }
}
