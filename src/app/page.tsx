import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home = () => (
	<div className="min-h-screen flex flex-col items-center justify-center p-8 from-gray-50 to-white">
		<div className="max-w-4xl w-full text-center space-y-8">
			<h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Welcome to Your
				<span className="text-blue-600"> Todo List</span>
			</h1>
			
			<p className="text-xl text-gray-600 max-w-2xl mx-auto">
				Stay organized and boost your productivity with our simple yet powerful todo list application.
			</p>

			<div className="flex flex-col sm:flex-row gap-4 justify-center">
				<Link href="/todo">
					<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
						View Your Tasks
					</Button>
				</Link>
				<Link href="/todo/create">
					<Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
						Create New Task
					</Button>
				</Link>
			</div>
		</div>
	</div>
);

export default Home;