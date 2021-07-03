import { useState } from 'react'
import { RandomCats } from '../../components/RandomCats'
import { RippleButton } from '../../components/Ripple'
export const RandomCatsC = () => {
    const [data, setData] = useState([])
    function fetchData() {
        fetch('https://catfact.ninja/fact?max_length=100').then(result => {
            if (result) {
                return result.json()
            }
            throw new Error('Ha ocurrido un error interno')
        }).then(result => {
            setData(result)
        })
    }
    return (<div style={{ display: 'flex', margin: 'auto', flexDirection:'column' }} >
        <RippleButton onClick={fetchData} label="Generate"></RippleButton>
        <RandomCats
            data={data}
        />
    </div>
    )
}