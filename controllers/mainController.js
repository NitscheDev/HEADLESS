
module.exports.index = (req, res) => {
    res.render('welcome', { author: 'NitscheDev', instagram: 'https://www.instagram.com/nitsche_dev/' });
}