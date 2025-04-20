export default function DecorativeBackground() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 dark:opacity-10"></div>
      <div className="absolute right-12 bottom-12 h-72 w-72 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-20 dark:opacity-10"></div>
      <div className="absolute top-1/2 left-1/3 h-36 w-36 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-20 dark:opacity-10"></div>
    </div>
  );
}
