module.exports = function(req, res, next) {
    const { session, sessionID } = req;
    let id = sessionID;
    console.log(id);
    console.log(session.user);
    console.log(session);
    if(!session.user) {
        session.user = {
            username: '',
            id: id
        }
    }
    next();
};