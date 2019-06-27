var User = require('../app/controllers/users');
var Webs = require('../app/controllers/webs');
module.exports = function (app) {
    app.post('/prod-api/user/login', User.login);
    app.get('/prod-api/user/info', User.info);
    app.post('/prod-api/user/logout', User.logout);

    // 网站管理
    app.post('/prod-api/webs/add', Webs.add);
    app.get('/prod-api/webs/del', Webs.del);
    app.get('/prod-api/webs/info', Webs.info);
    app.post('/prod-api/webs/update', Webs.update);
    app.get('/prod-api/webs/list', Webs.list);
    app.get('/prod-api/webs/physicalDel', Webs.physicalDel);

    app.get('/prod-api/transaction/list', function(req, res, next) {
        return res.status(200).json({
            code: 200,
            data: {
                total: 10,
                items: [{
                    order_no: '1',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '2',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '3',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '1',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '2',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '3',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '1',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '2',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '3',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }, {
                    order_no: '3',
                    timestamp: new Date().getTime(),
                    username: 'Charls',
                    price: 100,
                    status: 'success'
                }]
            }
        })
    });
}