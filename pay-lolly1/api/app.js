import express from 'express';
// import { router } from "./router.js";
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const port = 3032;
app.use(bodyParser.json())
app.use(cors())


let contactsList = [
    { password: 'S8538239!s' },
    { email: 's8538239@gmail.com' },
];

// app.use('/api', router)
// app.use('/ForgotPassword',
//     (req, res) => {
//         console.log("req", req.body.validUserName);
//         return res.status(200).json({ status: "ok" ,message: 'New password sent successfully'});
//     }); 

// app.use('/UpdatePassword',
//     (req, res) => {
//         // var error = { message: "old_password does not exists", data: { ststus: 400 } } //בודק אם הסיסמא הישנה היתה קיימת אם לא מחזיר א
//         // var error = { message: "The password has been used before", data: { ststus: 400 }//הסיסימא היתה בשימוש בעברF
//         console.log("old_Password", req.body.old_password);
//         console.log("contactsList[0].old_password", contactsList[0].old_password);
//         var s = '' + req.body.newPassword;
//         console.log("newPassword", s);
//         console.log("contactsList[1].newPassword", contactsList[1].newPassword);

//         if (contactsList[1].newPassword === s) {

//             console.log("400 new");

//             return res.status(400).json({ status: "fail", message: "The password has been used before" });
//         }
//         if (contactsList[0].old_password == req.body.old_password) {
//             console.log("200");
//             return res.status(200).json({ status: "ok", message: 'Password update successful' });
//         }
//         else if (!(contactsList[0].old_password == req.body.old_password)) {
//             console.log("400 old");
//             return res.status(400).json({ status: "fail", message: "old_password does not exists" });
//         }
//     });

// app.use('/Loginservice',
//     (req, res) => {
//         if (req.query.service) {
//             if ((contactsList[0].old_password == req.body.password) && (contactsList[1].newPassword == req.body.username)) {
//                 console.log("200");
//                 return res.status(200).json({ status: "ok", message: 'Password update successful', payload: { token: "ott1233" } });
//             }
//             else {
//                 console.log("400 old");
//                 return res.status(400).json({ status: "fail", message: "old_password does not exists" });
//             }
//         }
//         else {
//             console.log("Notservice");
//             console.log("paasword", req.body.paasword);
//             console.log("username", req.body.username);
//             //api login no service
//             console.log("send token 1233");
//             return res.status(200).json({ status: "ok", payload: { token: "1233" } });

//         }
//     });

// app.use('/Authenticate',
//     (req, res) => {
//         console.log("Authenticate get ottToken", req.body.otttoken);
//         console.log("Authenticate send token", 1233);

//         // return res.status(401).json({ status: "ok", payload: { token: "1233" } });

//         return res.status(200).json({ status: "ok", payload: { token: "1233" } });
//     });


// app.use('/SignOut',
//     (req, res) => {
//         console.log("TOKEN", req.body.token);

//         return res.status(200).json({ status: "ok" });

//         // return res.status(200).json({ status: "ok", payload: { token: "1233" } });
//     });

// app.use('/AccountsApiAuth',
//     (req, res) => {
//         console.log("send", contactsList[2].token);

//         var s = '' + contactsList[2].token;
//         console.log("contactsList[2].token",s);

//         if (s ===req.body.token) {
//             return res.status(200).json({ status: "ok", payload: { username: contactsList[1].newPassword, password: contactsList[0].old_password } });
//             // return res.status(403).json({ status: "fail" });

//         }
//         else {
//             return res.status(200).json({ status: "ok", payload: { username: contactsList[1].newPassword, password: contactsList[0].old_password } });

//             // return res.status(403).json({ status: "fail" });

//         }
//         // return res.status(200).json({ status: "ok", payload: { token: "1233" } });
//     });
// if (contactsList[1].newPassword ===s) {

//     console.log("400 new");

//     return res.status(400).json({ status: "fail", message: "The password has been used before" });
// }
// if (contactsList[0].old_password == req.body.old_password) {
//     console.log("200");
//     return res.status(200).json({ status: "ok", message: 'Password update successful' });
// }
// else if (!(contactsList[0].old_password == req.body.old_password)) {
//     console.log("400 old");
//     return res.status(400).json({ status: "fail", message: "old_password does not exists" });
// }
// });
app.use('/login',
    (req, res) => {
        console.log("password   "+req.body.password)
        console.log("email   "+req.body.email)
        console.log("contactsList[1].email  ",contactsList[1].email)

console.log("contactsList[0].password   ",contactsList[0].password)

            if ((contactsList[0].password == req.body.password) && (contactsList[1].email == req.body.email)) {
                console.log("200");
                return res.status(200).json({ status: "ok", message: 'Password update successful', payload: {token : "1234" } });
            }
            else {
                console.log("400 old");
                return res.status(400).json({ status: "fail", message: "old_password does not exists" });
            }
      
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


