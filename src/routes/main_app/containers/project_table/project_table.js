import React from 'react';
import './project_table.css';
import AddAnotherList from './containers/add_another_list/add_another_list';


let listId = 0;
let taskID = 0;
let taskCounter = -1;
let coll1 = "";
 
class ProjectTable extends React.Component {
	constructor() {
		super();
		this.state = {
			newTaskButton: false,
			newTaskName: '',
			newListName: "",
			lists: [],
			tasks: []
		}
	}

	// Ditects what the user wrote in the new list name input
	onNewListNameChange = (event) => {
		this.setState({ newListName: event.target.value })
	}

	// Creates new list and push it to the lists array in the state
	createNewList = () => {
		let listsArr = this.state.lists;
		let newList = {listId: listId, listIndex: this.state.lists.length, listName: this.state.newListName};
		listId += 1;
		listsArr.push(newList);
		this.setState({ lists: listsArr, newListButton: false, newListName: '' })
		console.log(this.state.lists);
	}

	render() {
		const { lists } = this.state;
		return (
			<div>
				<div className='fl w-80 ba tc'>
					<h1>{'Project Name'}</h1>
					<p>{'users list'}</p>
					<AddAnotherList onNewListNameChange={this.onNewListNameChange} createNewList={this.createNewList} />
				</div>
				
				{/*<Lists />*/}
			</div>
		);
	}
}


export default ProjectTable;