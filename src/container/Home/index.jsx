import { Home } from '../../components/Home'
export const HomeC = () => {
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
    return (
        <Home
        />
    )
}