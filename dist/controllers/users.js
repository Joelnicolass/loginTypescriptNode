"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
//get -----------------------------------------------------
const getUsers = (req, res) => {
    res.json({
        msg: "get all",
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "get only",
        id,
    });
};
exports.getUser = getUser;
// post -----------------------------------------------------
const createUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Post",
        body,
    });
};
exports.createUser = createUser;
// put -----------------------------------------------------
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "Put",
        body,
    });
};
exports.updateUser = updateUser;
//delete -----------------------------------------------------
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delete",
        id,
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.js.map