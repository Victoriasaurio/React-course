import React from 'react';

//Primero pinta los objetos y después ejecuta el useEffect.
//document.title = `useEffect` --> Nombra la pestaña del navegador.
//Siempre debe estar inicializado el useState
//fetch, función de javaScript --> GET

const Hook = () => {
    const [team, setTeam] = React.useState([]) //(2)

    React.useEffect(() => {
        console.log('useEffect')
        getData()
        //setTeam(data)
        //document.title = `useEffect` 
    }, []) //(1)
    //[] --> useEffect espera una lista, esto para evitar un bucle infinito.

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json() //Se pasa a formato JSON
        setTeam(users)
        console.log(users)
    }

    //(3) //JSX
    return(
        <div>
            <h1>List of users</h1>
            <ul>
                {team.map(item => (
                    <li key={item.id}> {item.name} - {item.email} </li>
                ))}
            </ul>
        </div>
    )
}

export default Hook;