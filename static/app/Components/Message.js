/**
 * Created by jorick on 13/01/2017.
 */
import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <ListItem
            primaryText={this.props.text}
            secondaryText={
                <p>
                    <span style={{color: lightBlack}}>{this.props.user}</span>
                </p>
            }
            secondaryTextLines={2}
        />
        );
    }
}

export default Message;