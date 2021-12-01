import React, {useState} from 'react'
import "../css/UserList.css"
import ListedUser from './ListedUser';

export default function UserList(props) {
    const [allUsers, setAllUsers] = useState(
        [
            {
                name: "Jaden",
                email: "jadenghowell@gmail.com",
                job: "Student",
                id: 1,
            },
            {
                name: "Derek",
                email: "derek@gmail.com",
                job: "Student",
                id: 2,
            },
            {
                name: "Trevor",
                email: "thowell@adobe.com",
                job: "UI Developer",
                id: 3,
            },
            {
                name: "Rebekah",
                email: "rebekah.white@yahoo.com",
                job: "R&D Engineer",
                id: 4,
            },
            {
                name: "Trent",
                email: "trentwilcox@smartystreets.com",
                job: "VP of Marketing",
                id: 5,
            },
            {
                name: "Mike",
                email: "mike@gmail.com",
                job: "Student",
                id: 6,
            },
            {
                name: "Robby",
                email: "robbyross@gmail.com",
                job: "President of Sales",
                id: 7,
            },
            {
                name: "Amanda",
                email: "amanda@gmail.com",
                job: "Graphic Artist",
                id: 8,
            },
        ]
        );

    const listItems = allUsers.map((user) => 
        <li key={user.id}><ListedUser user={user} selectUser={props.selectUser} /></li>
    )

    return (
        <div className="list">
            <ul>{listItems}</ul>
        </div>
    )
}
