import React, { Component,PropTypes} from 'react';
import {
   Text, View
}from 'react-native';
import {Toolbar as MaterialToolbar}  from 'react-native-material-design';

export default class IJOYToolbar extends Component {
  static contextTypes = {
        navigator: PropTypes.object
    };
    static propTypes = {
       onIconPress: PropTypes.func.isRequired
   };
    render(){
        const {navigator}=this.context;
        console.log(navigator);
        //toolbar第一次render没有 navigator ,节约性能，不去加载Toolbar
        if(navigator===null){
          return null;
        }
        //第二次render
        //Navigate.getInitialRoute 加载主页面，但是navigator 中没有currentRoute,也没push进入。在navigate 构造中将getInitialRoute赋给currentRoute

        //selfToolbar 存在如果为NO ,则没有导航，并且在其主页面除掉marginTop:59
        console.log(!!navigator.currentRoute.selfToolbar);
        console.log(navigator.currentRoute.selfToolbar);
        console.log('--------------------');
        if(navigator.currentRoute && !!navigator.currentRoute.selfToolbar && navigator.currentRoute.selfToolbar!==null){
          console.log('error');
          if(navigator.currentRoute.selfToolbar==='NO'){
            return null;
          }

          return (
             <navigator.currentRoute.selfToolbar/>
          );
        }
        return (

              <MaterialToolbar
                  title={navigator && navigator.currentRoute ? navigator.currentRoute.title : 'Welcome'}
                  icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                  onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
              />


        );
    }
}
