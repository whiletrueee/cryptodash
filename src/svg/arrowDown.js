function ArrowDown(props){
    return(
        <>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-full hover:cursor-pointer"
        onClick={props.decr}
      >
        <path
          fillRule="evenodd"
          d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
        </>
    )
}

export default ArrowDown;