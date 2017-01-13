/**
 * Created by jorick on 13/01/2017.
 */
import React from 'react';
import Message from '../Components/Message'
import List from'material-ui/List/List'
import Subheader from'material-ui/Subheader'
import Infinite from 'react-infinite';

const styles = {
    list:{
        width:600,
        float:'left'
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
                    <Subheader>Today</Subheader>
                <Infinite elementHeight={88}
                          containerHeight={500}
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