'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface TodoLayoutProps {
	children: ReactNode;
}

const TodoLayout = ({
	children
}: TodoLayoutProps) => {
	const pathname = usePathname();
	const isCreating = pathname === '/todo/create';

	return (
		<main className="min-h-screen w-full py-8">
			<div className="w-full mx-auto px-4">
				<div className="flex justify-between items-center mb-8">
					<Link href="/">
						<h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-blue-600">Todo List</h1>
					</Link>
					{!isCreating && (
						<Link href="/todo/create">
							<Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
								Create Task
							</Button>
						</Link>
					)}
				</div>
				{children}
			</div>
		</main>
	);
};

export default TodoLayout;