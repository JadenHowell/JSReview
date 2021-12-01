import React from 'react'
import "../css/ListedUser.css"

export default function ListedUser(props) {
    return (
        <div className="listed-user">
            <div className="user" onClick={() => props.selectUser(props.user)}>
                <p>{props.user.name}</p>
            </div>
        </div>
    )
}
