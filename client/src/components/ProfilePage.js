import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import Logout from './Logout';
import { Link } from 'react-router-dom';

export default function ProfilePage(props) {

    const [data2, setData2] = useState({error: ' '}); //this is the state for the customer 
    const [isLoading, setIsLoading] = useState(true); //displays loading when user clicks 
    useEffect(() => {
        fetch(`/api/v1/customer/profile`)
            .then(data => data.json())
            .then(data => {
                console.log('this is data')
                console.log(data)
                setData2(data)
                setIsLoading(false)
            })
            .catch (error => console.log('Please Login')          
            )
    },[])

    console.log('this is data2', data2)
    return (
        <div>
            {data2.error ? <div>User Not Authorized. <br/>Please <Link to="/login">Login</Link></div> : (
                <div>
                    <QRCode value={`http://localhost:3000/customer/${data2.data.id}/showcase`} />
                    <h1>Profile Page!!!!!!</h1>
                    <h1>{data2.data.first_name}</h1>
                    {/* <h1>{data.last_name}</h1> */}
                    <form onSubmit={e => {
                        e.preventDefault();
                    }}>
                    <Logout/>
                    </form>
                    <Link to='/booking'>Book Service</Link>
                </div>
            )}
        </div>
    )
}

//! Do we want to display their Iframe here? <div> matterport iframe<div>


// router.post('/', (req, res) => {
//     const { username, email, password } = req.body;
//     db.User.findOne( // get the user info
//       {
//         where: {
//           [Op.or]: [
//             { username: req.body.username },
//             { email: req.body.email }
//           ]
//         }
//       }).then((result) => {
//         console.log(result);
//         if (result == null) {
//           bcrypt.hash(req.body.password, 10, (err, hash) => {
//             db.User.create({
//               username,
//               email,
//               password: hash,
//             }).then((result) => {
//               res.render('index', { errorMessage: `Welcome ${result.username} Please Log In` })
//             });
//           });
//         } else {
//           res.render('index', { errorMessage: 'Username or Email Already in Database' }) //! method to search the db to find if user already exist 
//         }
//       })
//   })

//!! original copy do not touch
//!! testing 2