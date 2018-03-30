
//import version info from json
import * as app from '../../package.json';

// app configuration
export const app_config={
  appTitle:"App title",
  appVersion: app['version'],
  menuItems:[{
    path:"/",icon:"home",label:"Home"
  },{
    path:"/feature1/1a",icon:"tab",label:"Feature 1a"
  },{
    path:"/feature1/1b",icon:"tab",label:"Feature 1b"
  },{
    path:"/user",icon:"account_circle",label:"User"
  }],
  user:{
    title:'User works!'
  },
  apiPoints:{

  }
}
