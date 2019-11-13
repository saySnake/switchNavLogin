import  React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {BottomTabBar, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import HomePage from '../pages/HomePage';
import {Button,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const  MaterialTopTabNavigator =createMaterialTopTabNavigator(
    {
        Page1:{
            screen:Page1,
            navigationOptions:{
                tabBarLabel:'Page1',
                tabBarIcon:({tintColor,focused})=>(
                    <Ionicons
                        name ={'ios-home'}
                        size ={26}
                        style ={{color:tintColor}}
                    />
                )
            }
        },
        Page2:{
            screen:Page2,
            navigationOptions:{
                tabBarLabel:({tintColor,focused})=>(// 自定义Tabbar文字
                    <Text style={{color:focused?'orange':'gray'}}>Page2</Text>
                ),
                tabBarIcon:({tintColor,focused})=>(
                    <Ionicons
                        name ={'ios-people'}
                        size ={26}
                        style ={{color:focused?'orange':'gray'}}
                    />
                )
            }
        },
        Page3:{
            screen:Page3,
            navigationOptions:{
                tabBarLabel:({tintColor,focused})=>(// 自定义Tabbar文字
                    <Text style={{color:focused?'orange':'gray'}}>Page2</Text>
                ),
                tabBarIcon:({tintColor,focused})=>(
                    <Ionicons
                        name ={'ios-people'}
                        size ={26}
                        style ={{color:focused?'orange':'gray'}}
                    />
                )
            }
        }
    },
    {
        //选中的颜色
        tabBarOptions:{
            // activeTintColor:'red'
            tabStyle:{
                minWidth:50
            },
            upperCaseLabel:false, //是否标签大小写
            style:{ //背景颜色
                backgroundColor:'#879'
            },
            indicatorStyle:{ //下划线颜色
                height:2,
                backgroundColor:'white'
            },
            //标签文字颜色
            labelStyle:{
                fontSize:12,
                marginTop:6,
                marginBottom:6
            }
        }
    }
)
/*  //底部导航器
const  BottonTabNavigator =createBottomTabNavigator(
    {
        Page1:{
            screen:Page1,
            navigationOptions:{
                tabBarLabel:'Page1',
                tabBarIcon:({tintColor,focused})=>(
                    <Ionicons
                        name ={'ios-home'}
                        size ={26}
                        style ={{color:tintColor}}
                    />
                )
            }
        },
        Page2:{
            screen:Page2,
            navigationOptions:{
                tabBarLabel:({tintColor,focused})=>(// 自定义Tabbar文字
                    <Text style={{color:focused?'orange':'gray'}}>Page2</Text>
                ),
                tabBarIcon:({tintColor,focused})=>(
                    <Ionicons
                        name ={'ios-people'}
                        size ={26}
                        style ={{color:focused?'orange':'gray'}}
                    />
                )
            }
        }
    },
    {
        //选中的颜色
        tabBarOptions:{
            activeTintColor:'red'
        }
    }
)
*/

export const AppStackNavigator = createStackNavigator(
    {
    //四个路由   里面四个组建
    HomePage:{
        screen:HomePage,
    },
        MaterialTopTabNavigator:{
        screen:MaterialTopTabNavigator,
            navigationOptions:{
            title:'顶部导航器'
            }
        },
        BottomTabNavigator:{
            screen:createBottomTabNavigator,
            navigationOptions:{
                title:'底部导航器',
                header:null
            }
        },
    Page1:{
        screen:Page1,
        navigationOptions:({navigation})=>(
            {
               title:`${navigation.state.params&&navigation.state.params.name}页面名`//动态设置navigationOptions
            }
        )
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            title:'Page2',
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:(props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params = {}} = state;
            return {
                title: params.name?params.name:'This is page3',
                headerRight:(
                    <Button
                    title = {params.mode === 'edit'?'保存':'编辑'}
                    onPress ={()=>{
                        setParams({mode:params.mode==='edit'?'':'edit'})
                        }}
                    />
                )
            }
        }
    },
},

//默认的全局导航属性
{
    defaultNavigationOptions:{
            // header:null
         }
    }
);
