import React from 'react'
import cors from 'cors'

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8081/projetox/v1'
})

export default api