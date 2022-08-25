const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const { q, state } = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        state
    });
};

const userPost = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: 'post API - controller',
        body
    });
};

const userPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'put API - controller',
        id
    });
};

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
};
const userDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controller'
    });
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
};