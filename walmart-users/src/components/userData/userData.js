import React, { useState, useEffect } from 'react';
import OptionsList from "../optionsList/optionsList";
import UserTable from "./../userTable/userTable"
import { getUsersAge, getUsersData } from '../../service/service';

function UserData() {

    const [userData, setUserData] = useState([]);
    const [usersAge, setUsersAge] = useState([]);

    useEffect(() => {
        getUsersAge().then(data => setUsersAge(data));
        getUsersData().then(data => setUserData(data));
    }, []);

    return (
        <>
            <OptionsList userData={userData}/>
            <UserTable userData={userData} usersAge={usersAge} />
        </>
    );
}

export default UserData;

