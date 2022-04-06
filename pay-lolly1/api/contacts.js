
// let img1 = 'https://randomuser.me/api/portraits/men/1.jpg';
// let img2 = 'https://randomuser.me/api/portraits/men/2.jpg';
// let img3 = 'https://randomuser.me/api/portraits/men/3.jpg';

// let contactsList = [
//     {},
//     { id: 1, "img": img1, name: "Dan Smith", "phone": "(123) 745-526657" ,password:"123456",email:"876@",token:"1234"},
//     { id: 2, "img": img2, name: "Alex Alvarez", "phone": "(123) 542-5634271",password:"1234567" },
//     { id: 3, "img": img3, name: "Norman Dirtic", "phone": "(724) 124-88573" ,password:"565656"},
// ];
// /**
//  * Add
//  * @param {new contact} object 
//  * @returns  Contacts List
//  */
// export const addcontact = async (object) => {
//     contactsList.push({ "id": object.id, "img": object.img, "name": object.name, "phone": object.phone });
//     return contactsList;
// }
// /**
//  * Get
//  * @returns Contacts List
//  */
// export const getUser = async (token) => {
//      console.log("1",token);
//     return token;
// }
// /**
//  * Delete
//  * @param {index for delete} id 
//  * @returns Contacts List
//  */
// export const deleteContacts = async (id) => { 
//     contactsList.splice(id, 1);
//     return contactsList;
// }
// /**
//  * Put
//  * @param {update contact} object 
//  * @returns Contacts List
//  */
// export const putContacts = async (object) => {
//     let path = object.data.newContact;
//     let id = object.idsend.id

//     contactsList[id].img = path.img;
//     contactsList[id].name = path.name
//     contactsList[id].phone = path.phone;
//     if (path.title)
//         contactsList[id].title = path.title;
//     return contactsList;
// }



