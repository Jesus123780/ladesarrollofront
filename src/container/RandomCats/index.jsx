// import { useState } from 'react'
import { useState } from 'react'
import { RandomCats } from '../../components/RandomCats'
import { RippleButton } from '../../components/Ripple'
export const RandomCatsC = () => {
    // // Función cambiar el modo nocturno
    // const { keyTheme, handleTheme } = props
    // // Función para buscar Usuario
    // const [search, setSearch] = useState(null)
    // const [results, setResults] = useState([])
    // const onchange = e => {
    //     if (e.target.value) setSearch(e.target.value)
    //     else setSearch(null)
    // }
    // const { data, loading, error } = useQuery(SEARCH_USER, {
    //     variables: { search }
    // })
    // // Validación de inicio de sesión activa
    // const auth = useAuth()
    // useEffect(() => {
    //     if (data?.search) {
    //         const User = []
    //         data?.search?.forEach((user, index) => {
    //             User.push({
    //                 key: index,
    //                 title: user?.name,
    //                 username: user?.username,
    //                 avatar: user?.avatar,
    //             });
    //         });
    //         setResults(User)
    //     } else {
    //         setResults([])
    //     }
    // }, [data])
    const [data, setData] = useState([])
    // const getWeather = async () => {
    //     try {
    //         const path = 'https://catfact.ninja/fact?max_length=100';
    //         const res = await fetch(path)
    //         const json = await res.json()
    //         setData(json)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
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