import React from 'react'
import STORE from '../store'
import Backbone from 'backbone'

console.log(STORE)
var HomeView = React.createClass({
	componentWillMount: function(){
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	getInitialState: function(){
		return STORE.data
	},

	render: function(){
		return (
			<div className='main-view'>
				<h1>RABDARGAB</h1>
				<RpgBox />
				<Traits traits={STORE.data} />
			</div>
		)
	}
})

var RpgBox = React.createClass({
	render: function(){
		return (
			<div>
				<button onClick= {function() 
					{{STORE.set('booksRead')}}
				}>Read a book!</button>
				<button onClick= {function() 
					{{STORE.set('reportsDone')}}
				}>Do a report!</button>
				<button onClick= {function() 
					{{STORE.set('bucksGotten')}}
				}>Get a buck!</button>
			</div>
		)
	}
})

var Traits = React.createClass({
	render: function() {
		return (
			<div>
				<p>Books Read: {this.props.traits.booksRead}</p>
				<p>Reports Done: {this.props.traits.reportsDone}</p>
				<p>Dat Money, yo: {this.props.traits.bucksGotten}</p>
			</div>
		)
	}
})

export default HomeView