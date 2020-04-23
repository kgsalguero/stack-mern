import React from 'react';
import './UsersList.css';
import UserItem from './Useritem';

const UsersList = (props, a, b) => {
    if(props.items.length === 0){
        return(
            <div className="center">
                <h2> No se han econtrado usuarios!</h2>
            </div>
        );
    } else {
        return(
            <ul className="users-list">
                {
                    props.items.map(user => {
                        return(
                            <UserItem
                             key={user.id}
                             id={user.id}
                             image={user.image}
                             placeCount ={user.places}
                            />
                        );
                    }
                    )
                }
            </ul>
        );
    }
}

export default UsersList;