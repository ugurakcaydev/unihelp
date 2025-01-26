function PostSkeleton() {
  return (
    <div className="w-full flex relative p-3 gap-3 border-b border-[color:var(--background-third)] min-h-[300px] bg-zinc-50 animate-pulse">
      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
      <div className="flex-1 p-3">
        <header className="relative flex items-center justify-between">
          <div className="h-3 rounded-full bg-gray-200 w-[200px] "></div>
        </header>
      </div>
    </div>
  );
}

export default PostSkeleton;
