'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

const Error = ({
    error,
    reset,
}: ErrorProps) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="max-w-2xl w-full text-center space-y-8">
                <h1 className="text-9xl font-bold text-red-600">500</h1>
                <h2 className="text-3xl font-semibold text-gray-900">Something went wrong!</h2>
                <p className="text-xl text-gray-600">
                    We apologize for the inconvenience. An error has occurred.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                        onClick={() => reset()}
                    >
                        Try again
                    </Button>
                    <Link href="/">
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
                        >
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error;