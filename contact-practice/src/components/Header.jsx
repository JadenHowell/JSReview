import React from 'react';
import "../css/Header.css"

function Header(props) {
    // const [signInMessage, setSignInMessage] = React.useState(props.signedIn ? "Sign Out" : "Sign In");

    // React.useEffect(() => {
    //     setSignInMessage(props.signedIn ? "Sign Out" : "Sign In")
    // }, [props.signedIn])

    var signInMessage = props.signedIn ? "Sign Out" : "Sign In"

    return (
        <div className='header'>
            <h1 className='header-item'>Contact Manager</h1>
            <h3 className='header-item' onClick={props.onClick}><u>{signInMessage}</u></h3>
        </div>
    );
};

export default Header;