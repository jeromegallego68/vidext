//TODO: should display a skeleton here

const Loading = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-2xl w-full text-center space-y-8">
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-blue-600"></div>
      </div>
      <h2 className="text-3xl font-semibold text-gray-900">Loading...</h2>
    </div>
  </div>
);

export default Loading