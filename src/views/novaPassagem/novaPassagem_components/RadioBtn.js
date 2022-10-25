import { useEffect } from 'react'
import './RadioBtn.css'

export default function RadioBtn({text, name, handleOnChange, checked, id}) {

    useEffect(() => {
        if(checked !== undefined){
            if(checked === true){
                document.getElementById("sim").checked = true
            }else{
                document.getElementById("nao").checked = true

            }
        }
    })

    return (
        <div className='col-md-12' id='radio'>
            <p>{text}:</p>
            <div className='row-md'>
                <input type={"radio"} id={id + "Sim"} name={name} value={true} onChange={handleOnChange}/>
                <label htmlFor='sim:'>SIM</label>            
            </div>
            <div className='row-md'>            
                <input type={"radio"} id={id + 'Nao'} name={name} value={false} onChange={handleOnChange}/>
                <label htmlFor='nao:'>NÃO</label>
            </div>
        </div>
    )
}