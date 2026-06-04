type Props = {
  label: string;
  required?: boolean;
  name: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  type?: string;
};

const ContactInput = ({
  label,
  required,
  name,
  value,
  handleChange,
  placeholder,
  type,
}: Props) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-mono uppercase tracking-wider text-text-muted">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={
          "w-full px-4 py-3 rounded-lg bg-background border border-border text-sm outline-none transition-all duration-200 font-sans"
        }
        type={type ? type : "text"}
        onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
    </div>
  );
};

export default ContactInput;
