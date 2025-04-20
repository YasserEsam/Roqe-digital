const Header = ({ title }: { title: string }) => (
  <div className="mb-10 text-center">
    <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">
      {title}
    </h2>
    <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
  </div>
);
export default Header;
