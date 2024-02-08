const Footer = () => {
  return (
    <footer className='mt-4 flex justify-between text-xs text-gray-500'>
      <p>1 tasks left</p>
      <ul className='flex space-x-1 items-center text-xs'>
        <li className='cursor-pointer font-bold'>Low</li>
        <li>|</li>
        <li className='cursor-pointer'>medium</li>
        <li>|</li>
        <li className='cursor-pointer'>High</li>
        <li></li>
        <li></li>

        <li className='h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer'></li>
        <li className='h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer'></li>
        <li className='h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500'></li>
      </ul>
    </footer>
  );
};

export default Footer;
