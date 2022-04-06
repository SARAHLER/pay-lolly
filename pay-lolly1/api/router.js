// import { query, Router as expressRouter } from 'express';
// export const router = expressRouter();
// import {getUser, putContacts, addcontact, deleteContacts } from "./contacts.js";

// var contats = [];

// //Get
// router.get('/getAllcontacts', async (req, res) => {

//     let contacts = await getAllcontacts();
//     res.send(contacts);
// });

// //Get
// router.get('/getUser', async (req, res) => {
//     console.log("2");
//     let object1 = req.body;
//     // let object4 = query.body.userToken;

//     console.log("1",object1);
//     console.log("2",object2);
//     console.log("3",object3);

//     let user = await getUser(object);
//     res.send(user);
// });

// //Post
// router.post('/addContact', async (req, res) => {
//     try {
//         let object = req.body;
//         contats = await addcontact(object);
//         res.status(200).send(contats);
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// });

// //Delet  
// router.delete('/deleteContacts', async (req, res) => {
//     try {
//         let id = req.body.index;
//         contats = await deleteContacts(id);
//         res.status(200).send(contats);
//     }
//     catch (err) {
//         res.status(500).send(err.message);
//     }
// });

// //Put 
// router.put('/putContacts', async (req, res) => {
//     // try {
//     let object = req.body;
//     contats = await putContacts(object);
//     res.status(200).send(contats);
//     // }
//     // catch (err) {
//     //     res.status(500).send(err.message);
//     // }
// });


