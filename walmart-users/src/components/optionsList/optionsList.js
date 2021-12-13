import React from 'react';
import { TABLE_HEADERS } from '../../utils/constants';
import './optionsList.css';
const OptionsList = (props) => {
    const { userData } = props;
    return (
        <>
            {userData && userData.length &&
                <div className='options-list'>
                    <div className="options-title-container">
                        <h2>ALL USERS</h2>
                        <h5>Users and their age</h5>
                    </div>
                    <div className="options-table-container">
                        <table>
                            <thead>
                                <tr>{TABLE_HEADERS.map((header, key) => <th key={header + key}>{header}</th>)}</tr>
                            </thead>
                            <tbody>
                                {userData.map((data, key) => {
                                    return (
                                        <tr key={'tr_'+key}>
                                            <td>{data.username}</td>
                                            <td>{data.age}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </>
    );
}
export default OptionsList;