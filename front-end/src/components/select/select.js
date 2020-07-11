import React from 'react'
import './select.css'

const select = (props) => {
    const options = props.opts.map(opt => {
        return <option value={opt} key={opt}>{opt}</option>
    })

    return (
        <div>
            <select value={props.value} onChange={props.changed}>
                {options}
            </select>
        </div>
    )
}

export default select