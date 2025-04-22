'use client';

import { trpc } from '@/utils/client';
import { PropsWithChildren, } from 'react';

const Provider = ({ children }: PropsWithChildren) => children;

export default trpc.withTRPC(Provider);