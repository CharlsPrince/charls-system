const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://www.fairy520.top/public/headImages/4db0f25b77d84f3b846c553edca99af1.jpeg',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://www.fairy520.top/public/headImages/4db0f25b77d84f3b846c553edca99af1.jpeg',
        name: 'Normal Editor'
    }
}

/* 登录 */
exports.login = (req, res, next) => {
    const {
        username
    } = req.body
    const token = tokens[username]

    // mock error
    if (!token) {
        return res.status(400).json({
            code: 60204,
            message: 'Account and password are incorrect.'
        })
    }

    return res.status(200).json({
        code: 200,
        data: token
    });
}

/* 详情 */
exports.info = (req, res, next) => {
    const {
        token
    } = req.query
    const info = users[token]

    // mock error
    if (!info) {
        return res.status(400).json({
            code: 50008,
            message: 'Login failed, unable to get user details.'
        })
    }

    return res.status(200).json({
        code: 200,
        data: info
    })
}

/* 登出 */
exports.logout = (req, res, next) => {
    return res.status(200).json({
        code: 200,
        data: 'success'
    })
}