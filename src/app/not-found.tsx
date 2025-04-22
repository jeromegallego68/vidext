import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-8">
    <div className="max-w-2xl w-full text-center space-y-8">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900">Page Not Found</h2>
      <p className="text-xl text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="pt-4">
        <Link href="/">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;