import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{
	data: { 
		booksRead: 0,
		reportsDone: 0,
		bucksGotten: 0,
	},
	set: function(obj){
		console.log('set, go', STORE.set)
		this.data[obj] += 1
		this.data = Object.assign(this.data, this.data[obj], this.data.value)
		this.trigger('dataUpdated')
	}
})
export default STORE