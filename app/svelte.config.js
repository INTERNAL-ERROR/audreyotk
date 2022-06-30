/*@type {import('@sveltejs/kit').Config}*/
import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter({
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: true
		}),
       vite: {
           server: {
                host: '0.0.0.0',
                hmr: {
                  port: 443,
                }
            }
        }
	},

};