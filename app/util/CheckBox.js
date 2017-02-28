var Icon=require('react-native-vector-icons/Ionicons');
import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	TouchableHighlight,
	Text,
	ScrollView,
	Image
} from 'react-native';
export default class CheckBox extends React.Component{
   static defaultProps = {
      checked: false
   };
  static propTypes={
     checked: React.PropTypes.bool,
     onChange: React.PropTypes.func
  };
  constructor(props){
     super(props);
     this.state = {
        checked: props.checked,
     };
  }
  componentWillReceiveProps(nextProps) {
      this.setState({
        checked: nextProps.checked
      });
  }
  onChange() {
     this.setState({checked:!this.state.checked});
  }
  toggle(){
    //  console.log("checkbox被点击了");
     this.setState({checked:!this.state.checked});
     this.props.onChange(this.state.checked);
  }
  render() {
    var source = "ios-checkmark-circle-outline";
    if(this.state.checked){
      source = "ios-checkmark-circle";
    }
    var container = (
      <View style={{flex:1}}>
        <Icon name={source} size={26} style={{}} color="#fd7e2d" ></Icon>
      </View>
    );
    return (
      <TouchableHighlight ref="checkbox" onPress={this.toggle.bind(this)} underlayColor='white'>
        {container}
      </TouchableHighlight>
    )
  }
}
