exports.getall = (req, res) => {
    let url = req.originalUrl
    switch (url) {
        case '/':
            res.render('home')
            break;
        case '/chuyencu':
            res.render('chuyencu', { data: { students: [{ name: 'long bui bao', home: 'gia lai' }, { name: 'bui bao long', home: 'gia lai' }, { name: 'long bao bui', home: 'gia lai' }], year: '2021-2022' } })
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
        default:
            res.render('404')
            break;
    }
};