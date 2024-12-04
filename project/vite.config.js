import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //proxy server
  // server :{
  //   proxy : {
  //     '/login/oauth/access_token':'https://github.com',
  //     '/user':'https://api.github.com',
  //   }
  // }
})
