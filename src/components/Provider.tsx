'use client';

import { trpc } from '@/utils/trpc';
import { PropsWithChildren, } from 'react';

const Provider = ({ children }: PropsWithChildren) => children;

export default trpc.withTRPC(Provider);