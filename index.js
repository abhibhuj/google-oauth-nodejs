'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {google} = require('googleapis');


const expressApp = express().use(bodyParser.json());

const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];

//  EXPRESS APP test route (GET)
expressApp.get('/google/login', (req, res) => {

    const state = req.query.state;
    console.log('state------------------', state);
    const oauth2Client = new google.auth.OAuth2(
        '412113996901-19bi8jsek70nnntc82g1l8uj6jn36srs.apps.googleusercontent.com',
        'Tip4Y-BsKcuBb8nAnpMK773_', // e.g. _ASDFA%DFASDFASDFASD#FAD-
        'https://oauth-redirect.googleusercontent.com/r/actions-codelab-e550e'
    );
    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        // prompt: 'consent',
        // If you only need one scope you can pass it as a string
        scope: defaultScope,
        state: state,
    });
    res.redirect(url);
});


const PORT = 5000;
expressApp.listen(PORT, () =>
    console.log(`*** SERVER RUNNING LOCALLY ON PORT ${PORT} ***`)
);
