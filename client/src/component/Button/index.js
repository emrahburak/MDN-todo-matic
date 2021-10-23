import React,{Children, Fragment} from 'react'


const Button = ({status,children,...props})=>{
    return(
        <div>
        <button type="button" className="btn toggle-btn" aria-pressed={String(status)} {...props}>
            {children}
        </button>

        </div>
    )
}

export default Button;