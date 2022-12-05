import Image from "../assets/roadtoknowledge.svg"

export const Home = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-screen flex gap-10 flex-row items-center justify-center">
      <img className="opacity-90 " src={Image} alt="404 image" />
      <h1 className="font-extrabold text-5xl">Road To Knowledge</h1>
    </div>
  );
};