import React from 'react';
import NavigationBar from 'NavigationBar';

class MainContainer extends React.Component {
    render() {
        return(
            <div>
                <NavigationBar/>
                {this.props.children}
            </div>
        );
    }
};

export default MainContainer;