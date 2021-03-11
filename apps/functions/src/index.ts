import * as functions from 'firebase-functions'
import config from './config/index'
import axios from 'axios'

const { SENDGRID } = config

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const subscribe = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') return res.sendStatus(404)
  if (!req.body.email) return res.status(400).send({ message: 'Email is required.' })

  try {
    await axios.put('https://api.sendgrid.com/v3/marketing/contacts', {
      'list_ids': [SENDGRID.LIST_ID],
      contacts: [{
        email: req.body.email
      }]
    }, {
      headers: {
        authorization: `Bearer ${SENDGRID.API_KEY}`,
        'content-type': 'application/json'
      }
    })
  } catch (error) {
    console.log('Subscribe Error')
    console.log(error.response.data)

    const { errors } = error.response.data

    let showError = `Failed to subscribe. Please contact ${SENDGRID.CONTACT}`

    errors.forEach((error) => {
      if (error.field === 'contacts[0].email') {
        // capitalize sendgrid error message
        showError = error.message.charAt(0).toUpperCase() + error.message.slice(1)
      }
    })

    return res.status(500).send({ message: showError })
  }

  return res.send('ok')
})
