import React from "react";

export default function FormCheck(){
    const switchReq = React.useRef()
    const style = ['bold', 'italic','underline']
    const size = ['small', 'medium', 'large', 'larger']
    let checkedStyle = []
    let checkedSize = ''

    const onChangeCheck =(event)=>{
        let checked = event.target.checked
        let value = event.target.value
        let idx = checkedStyle.indexOf(value)

        if(checked && idx === -1){
            checkedStyle.push(value)
        }else{
            checkedStyle.slice(idx, 1)
        }
    }

    const onChangeRadio = (event) =>{
        checkedSize = event.target.value
    }

    const onClickButton = () => {
        if (switchReq.current.checked){
            if(checkedStyle.length === 0){
                alert('Please select style')
                return
            }else if(checkedSize === ''){
                alert('Please select size')
                return
            }
        }

        let msg = 'selected style(s): ' + checkedStyle.join(',')
        msg += '\nselected size: ' + checkedSize
        alert(msg)
    }

    return(
        <div className="mt-4 mx-auto p-3 rounded" style={{width:'450px', background:'#cee'}}>
            <form>
                <span>font style</span>&nbsp;&nbsp;
                {
                    style.map((st, i) => {
                        return(
                            <div className="form-check form-check-inline mb-2">
                                <input type="checkbox" id={'check'+i} value={st} 
                                    className="form-check-input" onChange={onChangeCheck}/>
                                <label htmlFor={'check'+i} className="form-check-label">{st}</label>
                            </div>
                        )
                    })
                }
                <br/>
                <span>font size</span>&nbsp;&nbsp;
                {
                    size.map((sz, i) => {
                        return(
                            <div className="form-check form-check-inline mb-2">
                                <input type="radio" id={'radio'+i} value={sz} name="fontSize"
                                    className="form-check-input" onChange={onChangeRadio}/>
                                <label htmlFor={'radio'+i} className="form-check-label">{sz}</label>
                            </div>
                        )
                    })
                }
                <div className="form-check form-switch mt-3">
                    <input type="checkbox" id="sw" value="require" 
                        className="form-check-input" ref={switchReq}/>
                    <label htmlFor="sw" className="form-check-label">require</label>
                </div>

                <div className="text-center mt-4">
                    <button type="button" className="btn btn-sm px-4 rounded"
                        onClick={onClickButton}>OK</button>
                </div>
            </form>
        </div>
    )
}