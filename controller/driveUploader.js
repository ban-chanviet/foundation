const uploaderGG = require('./googleDriveMainFunction')
const mimeType = require('mime-types')
exports.googleDrive = (req, res) => {
    let sampleFile;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    //rename the sampleFile in request object
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/../userFiles/' + sampleFile.name;
    const mimeTypeOfFile = mimeType.lookup(sampleFile.name)
    const acceptedMimeType = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword']
    if (acceptedMimeType.includes(mimeTypeOfFile)) {
        sampleFile.mv(uploadPath).then(() => {
                let parameterObj = {
                    path: uploadPath,
                    studentName: req.body.name,
                    studentEmail: req.body.email,
                    studentPhone: req.body.phone,
                    fileName: sampleFile.name,
                    mimeType: mimeTypeOfFile
                }
                uploaderGG(parameterObj)
            })
            .then(() => {
                res.redirect('/thankyou')
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        res.redirect('/uploadcval')
    }
};