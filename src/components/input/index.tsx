const Input = ({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type?: "text" | "number" | "email";
  value:string,
  onChange: (e: any) => void;
}) => {
  return (
    <div className="relative z-0">
      <input
        onChange={onChange}
        type={type || "text"}
        id="name"
        value={value}
        className="block appearance-none py-2.5 px-0 w-full h-10 bg-transparent caret-yellow-600 text-gray-700 border-b-[2px] border-black/30 focus:border-yellow-600 outline-none ring-0 focus:delay-[99999] peer"
        placeholder=" "
      />
      <label
        htmlFor="name"
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
