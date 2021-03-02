exports.getall = (req, res) => {
    let url = req.originalUrl
    switch (url) {
        case '/':
            res.render('home')
            break;
        case '/story':
            res.render('mystory', { students: [{ name: 'long', year: '2021-2022' }] })
            break;
        case '/support':
            res.render('support')
            break;
        case '/uploadcv':
            res.render('uploadcv')
            break;
        case '/about':
            res.render('about')
            break;
        default:
            res.render('404')
            break;
    }
};