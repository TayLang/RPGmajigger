import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomeView from './views/homeview'


const app = function() {
  var RpgRouter = Backbone.Router.extend({
  	routes: {
  		"home" : "handleHome",
  	},
  	handleHome : function() {
  		ReactDOM.render(<HomeView />, document.querySelector('.container'))
  	},

  })
  new RpgRouter ()
  Backbone.history.start()
}
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..