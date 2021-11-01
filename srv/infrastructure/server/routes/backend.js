const express = require('express')
const {container} = require("../../../common/container");
const router = express.Router()

router.get('/user/find/:name', async (req, res) => {
    const h = await container.resolve('UserController').findUser(req.params.name)
    res.sendPresentedResponse(h)
})

module.exports = router
