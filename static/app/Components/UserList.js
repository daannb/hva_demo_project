/**
 * Created by jorick on 13/01/2017.
 */
import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


const styles = {
    list:{
        width:300,
        float:'left'
    }
};


class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.div}>
                <List style={styles.list}>
                    <Subheader>Online users</Subheader>
                    {
                        this.props.users.map((user, i) => {
                            return (
                                <div>
                                <ListItem key = {i}
                                          primaryText={user}
                                          rightIcon={<CommunicationChatBubble />}
                                />
                                    <Divider />
                                    </div>
                            );
                        })
                    }
                </List>
            </div>
        );
    }
}

export default Users;