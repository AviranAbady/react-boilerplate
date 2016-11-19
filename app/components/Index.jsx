import React from 'react';
import UserIndexComponent from 'IndexUser';
import GuestIndexComponent from 'IndexGuest';
import {connect} from 'react-redux';

class Index extends React.Component {
   render() {
       if(this.props.user) {
           return <UserIndexComponent userName={this.props.user.username}/>;
       }
       else {
           return <GuestIndexComponent/>;
       }
   }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Index);