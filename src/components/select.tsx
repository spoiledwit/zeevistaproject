const Select = ({
  options,
  onChange,
  defaultLabel,
}: {
  options: { label: string; value: string }[];
  onChange: (e: any) => void;
  defaultLabel: string;
}) => {
  return (
    // ! `defaultValue` prop does not work
    <select
      onChange={onChange}
      className="bg-transparent text-gray-700 border border-primary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:focus:ring-primary dark:focus:border-primary"
    >
      <option value={""} label={defaultLabel} />
      {options.map((op) => (
        <option
          key={op.value}
          className="text-black capitalize"
          label={op.label}
          value={op.value}
        />
      ))}
    </select>
  );
};

export default Select;
