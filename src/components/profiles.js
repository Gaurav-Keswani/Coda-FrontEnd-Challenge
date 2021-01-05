import React from 'react';
import Table from 'react-bootstrap/Table'

const Profiles = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <div>
            <h2 className='list-head'>Available Public Repositories</h2>
            <table className="striped bordered hover">
                <thead>
                    <tr>
                        <th>SELECT</th>
                        <th>PLAYER NAME</th>
                        <th>AVATAR</th>
                        <th>BET</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.map((data, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.Name}</td>
                                <td><img className='profile-img' src={data["Profile Image"]} alt={data.Name} /></td>
                                <td>{data.Bet}</td>
                                <td>{data.Price}</td>
                            </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default Profiles;
