import Image from "../assets/404.svg"

export const NotFound = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-screen flex flex-col items-center justify-center">
      <img className="opacity-40 absolute" src={Image} alt="404 image" />
      {/* <h1 className="font-extrabold text-5xl">Page Not Found</h1> */}
    </div>
  );
};