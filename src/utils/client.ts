import { AppRouter } from '@/server';
import { getBaseUrl } from '@/utils/helpers';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

export const trpc = createTRPCNext<AppRouter>({
    config() {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    async headers() {
                        return {
                            // authorization: getAuthCookie(),
                        };
                    },
                }),
            ],
        };
    },
    ssr: false,
});