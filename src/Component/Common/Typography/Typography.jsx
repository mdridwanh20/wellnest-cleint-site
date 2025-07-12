

export function HeadingH1({headingH1, className}) {

  return (
    <div className= {`py-1 font-bold lg:text-8xl capitalize text-5xl text-[var(--primaryColor)] ${className}`} >
      {headingH1}
    </div>
  )
}

export function HeadingH2({headingH2, className}) {
  return (
    <div className= {`py-1 font-bold lg:text-3xl capitalize text-2xl text-[var(--primaryColor)] ${className}`} >
      {headingH2}
    </div>
  )
}

export function HeadingH3({headingH3, className}) {
  return (
    <div className= {`py-1 font-semibold text-base  capitalize text-[var(--primaryColor)] ${className}`} >
      {headingH3}
    </div>
  )
}

export function Btn({btn, icon, className}) {
  return (

    <div className= {`btn bg-[var(--primaryColor)] capitalize text-white font- cursor-pointer hover:text-white hover:bg-[#07344e] ${className}`} >
      <button>{btn}</button>
      {icon && <span className="text-base mt-1">{icon}</span>}
    </div>
  )
}



