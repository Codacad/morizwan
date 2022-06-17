const index = (req, res) => {
    res.render('index', {title:"Mongoose Referencing"})
}

const resume = (req, res) => {
    res.render('resume', {title: "Resume"})
}

const message_create = (req, res) => {
       res.send(req.body)
}

const blog = (req, res) => {
    res.render('blog', {title:'Blog'})
}



module.exports = {
    index,
    resume,
    message_create,
    blog,
}