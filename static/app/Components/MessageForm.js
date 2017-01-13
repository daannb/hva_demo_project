/**
 * Created by jorick on 13/01/2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField'
class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.changeHandler = this.changeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        var message = {
            user : this.props.user,
            text : this.state.text
        }
        this.props.onMessageSubmit(message);
        this.setState({ text: '' });
    }

    changeHandler(e) {
        console.log(e)
        this.setState({ text : e.target.value });
    }

    render() {
        return(
            <div className='message_form'>
                 <form onSubmit={this.handleSubmit}>
                    <TextField
                        onChange={this.changeHandler}
                        value={this.state.text}
                        hintText="Say something"
                    /><br />
                </form>
            </div>
        );
    }
}

export default MessageForm;