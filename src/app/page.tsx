export default function Home() {
  return (
    <div className=" p-4">
      <div className="max-w-2xl h-screen border border-gray-200 mx-auto">
        <div className="flex justify-between items-center px-2">
          <input
            type="text"
            placeholder="Untitled form"
            className="p-2 border-none"
          />
          <button className=" px-4 py-0.5 h-7  text-gray-400 border border-gray-200 rounded-md">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}