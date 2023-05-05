interface Input {
  setFormData: any;
  formData: any;
  properName: string;
  shortName: string;
  type: string;
  placeholder: string;
  step?: number;
  min?: number;
  max?: number;
}

export default function Input({
  setFormData,
  formData,
  properName,
  shortName,
  type,
  placeholder,
  step,
  min,
  max,
}: Input) {
  return (
    <label
      htmlFor={shortName}
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">{properName}</span>
      <input
        type={type}
        id={shortName}
        placeholder={placeholder}
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        value={formData[shortName]}
        onChange={(e) =>
          setFormData({ ...formData, [shortName]: e.target.value })
        }
        step={step}
        min={min}
        max={max}
      />
    </label>
  );
}
