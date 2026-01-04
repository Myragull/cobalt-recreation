
type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className=" cursor-pointer relative rounded-4xl bg-black border border-[#243745] px-4 py-2 text-neutral-300 flex-col items-center justify-center ">
        <div className="absolute -bottom-px h-px bg-gradient-to-r from-transparent via-[#549ead] to-transparent w-[80%] ">
        </div>
          {text}
    </button>
  );
};