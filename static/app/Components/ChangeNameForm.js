import React from 'react'
import TextField from 'material-ui/TextField'

class ChangeNameForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newName: ''
        };
        this.onKey = this.onKey.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onKey(e) {
        this.setState({ newName : e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var newName = this.state.newName;
        this.props.onChangeName(newName);
        this.setState({ newName: '' });
    }

    render() {
        return(
            <div className='change_name_form'>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        onChange={this.onKey}
                        value={this.state.text}
                        hintText="Display name"
                    /><br />
                </form>
             </div>
        );
    }

}

export default ChangeNameForm
