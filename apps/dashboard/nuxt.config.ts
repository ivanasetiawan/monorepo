// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { cookie } from '@venopi/utils';

export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=500, initial-scale=1',
			title: `Dashboard NuxtJS + Vue  ${cookie}`,
		}
	}
})
