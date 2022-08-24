function CButton(props) {
  return (
    <button
      type="button"
      className={`bg-slate-800 px-5 py-${props.py} rounded-md hover:bg-slate-900 text-gray-100 text-${props.textsize} focus:outline-none focus:ring-1 focus:ring-slate-300`}
    >
      {props.label}
    </button>
  );
}

export default CButton;