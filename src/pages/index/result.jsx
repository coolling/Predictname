import Taro, { Component } from "@tarojs/taro";
import { View ,Button} from "@tarojs/components";
import "./Result.less";
export default class Result extends Component {
    close=()=>{
       
        this.props.close()
      }
  render() {
     
    return (
      <View className="result">
        <View className="name">
          <View>你的贱名为： </View>
          <View>
            {this.props.firstWord}
            {this.props.secondWord}
          </View>
          <Button onClick={this.close} className='btn'>确定</Button>
        </View>
      </View>
    );
  }
}
