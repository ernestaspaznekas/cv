import React from 'react';
import BottomNavigation from './BottomNavigation'
//import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';


const footerStyle = {
    backgroundColor: "#212121",
    boxSizing: "border-box",
    paddingTop: "20px",
    paddingBottom: "20px",
}

const footerFontStyle = {
    color: "#FFFFFF"
}


export default class AppFooter extends React.Component {
    
    handleMap = (event) => {
    this.props.handleMap()
    };

    render() {
        return (
            <div>
                <BottomNavigation handleMap={this.handleMap} />
                <Typography type="title" color="inherit" align="center">
                    <div style={footerStyle}>
                        <p style={footerFontStyle}>
                            App Footer
                        </p>
                    </div>
                </Typography>
            </div>
        )
    }
}