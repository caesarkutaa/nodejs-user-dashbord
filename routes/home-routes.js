const express = require('express')
const router  = express.Router()
const { indexView,tablesView, billingView,virtualrealityView,rtlView } = require('../controllers/homecontroller')



router.get('/', indexView)
router.get('/table', tablesView)
router.get('/billing', billingView)
router.get('/virtualReality', virtualrealityView)
router.get('/rtl', rtlView)

module.exports = {
    routes:router
}