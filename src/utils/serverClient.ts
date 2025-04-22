import { appRouter } from '@/server';
import { getBaseUrl } from '@/utils/helpers';
import { httpBatchLink } from '@trpc/client';

export const serverClient = appRouter.createCaller({
	links: [
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`
		})
	]
})