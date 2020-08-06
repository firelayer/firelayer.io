import * as functions from 'firebase-functions'
import config from './config'
import axios from 'axios'

export const subscribe = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') return res.sendStatus(404)
  if (!req.body.email) return res.status(400).send({ message: 'Email is required.' })

  try {
    await axios.put('https://api.sendgrid.com/v3/marketing/contacts', {
      'list_ids': ['e0a7bcbe-d72c-4663-9dc2-8b377eac65ee'],
      contacts: [{
        email: req.body.email
      }]
    }, {
      headers: {
        authorization: `Bearer ${config.SENDGRID_API_KEY}`,
        'content-type': 'application/json'
      }
    })
  } catch (error) {
    console.log('Subscribe Error')
    console.log(error.response.data)

    const { errors } = error.response.data

    let showError = 'Failed to subscribe. Please contact hello@firelayer.io'

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
