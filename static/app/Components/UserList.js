import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';


const styles = {
    list:{
        width:300,
        height: window.innerHeight+'px',
        float:'left',
        borderRight: '1px solid rgb(224, 224, 224)',
    },
    userTitle:{
        fontFamily: 'Arial',
        color: '#000',
        borderBottom: '2px solid rgb(224, 224, 224)'
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
                    <Subheader style={styles.userTitle}>Online users</Subheader>
                    {
                        this.props.users.map((user, i) => {
                            return (
                                <div>
                                <ListItem key = {i}
                                          primaryText={user}

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