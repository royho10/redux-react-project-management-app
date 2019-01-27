import React, { Component } from 'react';


let listId = 0;

class AddAnotherList extends Component {
	constructor() {
    	super();
    	this.state = {
    		newListButton: false,
    	}
 	}

 	// Open the box where the user can type new list name
	onSubmitOpenAddListButton = () => {
  		this.setState({ newListButton: true })
	}

 	

	// Close the new list box
	xButton = () => {
		this.setState({ newListButton: false })
	}
  	render() {
  		const { newListButton } = this.state;
		return (
			<div>
				{ newListButton === false
		 			? <button id="openAddListButton" className='fl w-20 ba dim ma2' onClick={this.onSubmitOpenAddListButton}>{'+ Add another list'}</button>
		 			: ( <div id='addNewListBox' className='list fl w-20 ma2'>
					  		<input className='fl w-100 pa2' placeholder='Enter list title...' type='text' id='newListInput' onChange={this.props.onNewListNameChange} autoFocus />
							<button id="submitAddListButton" className='fl w-40 pa2 ma2 bg-green dim' onClick={this.props.createNewList}>{'Add List'}</button>
							<p className='f3 fl w-10 pa2 ma2 pointer dim' onClick={this.xButton}>{'X'}</p>
					    </div> 
					  )
				}	
			</div>	
		);
	}
}

export default AddAnotherList;