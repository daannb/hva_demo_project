import React from 'react';
import Message from '../Components/Message'
import List from'material-ui/List/List'
import Subheader from'material-ui/Subheader'
import Infinite from 'react-infinite';

const styles = {
    list:{
        width:600,
        height: window.innerHeight+'px',
        float:'left',
        backgroundColor: 'rgb(251, 251, 251)'
    },
    messageHeader:{
        borderBottom: '2px solid rgb(224, 224, 224)',
        fontFamily: 'Arial',
        color: '#000'
    }
};

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            isInfiniteLoading: false
        };
    }

    render() {
        return (
            <div>
                <List style={styles.list}>
                    <Subheader style={styles.messageHeader}>Messages</Subheader>
                <Infinite elementHeight={88}
                          containerHeight={450}
                          displayBottomUpwards
                          timeScrollStateLastsForAfterUserScrolls={0}
                          infiniteLoadBeginEdgeOffset='test'

                >

                {
                    this.props.messages.map((message, i) => {
                        return (
                            <Message
                                key={i}
                                user={message.user}
                                text={message.text}
                            />
                        );
                    })
                }
                </Infinite>
                </List>
            </div>
        );
    }
}

export default MessageList;