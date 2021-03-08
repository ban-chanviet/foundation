exports.getall = (req, res) => {
    let url = req.originalUrl
    switch (url) {
        case '/':
            res.render('home')
            break;
        case '/chuyencu':
            res.render('chuyencu', { students: [{ name: 'long', year: '2021-2022' }] })
            break;
        case '/gopsuc':
            res.render('support')
            break;
        case '/ungtuyen':
            res.render('uploadcv')
            break;
        case '/uploadcval':
            res.render('uploadcval')
            break
        case '/gioithieu':
            res.render('gioithieu')
            break;
        case '/thankyou':
            res.render('thankyou')
            break;
        case '/test':
            res.render('test')
            break;
        default:
            res.render('404')
            break;
    }
};