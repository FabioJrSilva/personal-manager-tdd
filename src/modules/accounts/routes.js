const { Router } = require('express');
const AccountHttpRequest = require('../../http/AccountHttpRequest');

const router = Router();

router.get('/accounts', AccountHttpRequest.index);
router.get('/accounts/:id', AccountHttpRequest.show);
router.post('/accounts', AccountHttpRequest.store);

module.exports = router;
