/*
  app frame for ijoy
  支持跳转，
  支持自定义导航 [selfToolbar存在为NO的时候，则没有导航栏，但selfToolbar存在且不为NO的时候，则代表自定义导航。]
  当routes.有searchbar的时候加载自定义的Toolbar,
*/
import React, {Component } from 'react';
import {
  Navigator, DrawerLayoutAndroid, ScrollView, View, Text
}from 'react-native'

import Navigate from './Navigate';
import  IJOYToolbar  from './ijoyToolbar';
import Navigation from './Navigation';


export default class  IjoyFrame extends Component {

	static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			drawer: null,
			navigator: null
		};
	}

	getChildContext = () => {
		return {
			drawer: this.state.drawer,
			navigator: this.state.navigator
		}
	};

	setDrawer = (drawer) => {
		this.setState({
			drawer
		});
	};

	setNavigator = (navigator) => {
		this.setState({
			navigator: new Navigate(navigator)
		});
	};

	render() {
		const { drawer, navigator } = this.state;
		const navView = React.createElement(Navigation);

		return (
			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => {
                    if (drawer && navigator) {
                        return navView;
                    }
                    return null;
                }}
				ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
			>
				{drawer &&
				<Navigator
					initialRoute={Navigate.getInitialRoute()}
					navigationBar={<IJOYToolbar onIconPress={drawer.openDrawer} />}
					configureScene={() => {
                            return Navigator.SceneConfigs.FadeAndroid;
                        }}
					ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
					renderScene={(route) => {
                        if (this.state.navigator && route.component) {
                            return (
                                <View
                                    style={styles.scene}
                                    showsVerticalScrollIndicator={false}>
                                	<route.component title={route.title} path={route.path} {...route.props} />
                                </View>
                            );
                        }
                    }}
				/>
				}
			</DrawerLayoutAndroid>
		);
	}
}


const styles = {
	scene: {
		flex: 1,
		marginTop: 56
	}
};
