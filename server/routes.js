const express = require('express')
const crypto = require('crypto');
const router = express.Router()

router.get("/api/something", (req, res) => {
  res.json({ status: "OK" })
})

router.post("/epayco/confirmation", (req, res) => {
  const signature = req.query["x_signature"]

  // validar la firma
  const pkey = ""
  const str = `${req.query['x_cust_id_cliente']}^${pkey}^${req.query['x_ref_payco']}^${req.query['x_transaction_id']}^${req.query['x_amount']}^${req.query['x_currency_code']}`
  var hash = crypto.createHash('sha256').update(str).digest('hex')

  if (hash != signature) {
    res.sendStatus(422)
    return
  }

  // actualizar la base de datos
  //const id = req.query['x_extra1']

  res.send("OK") // le respondemos a ePayco con un 200 OK
})

module.exports = router
