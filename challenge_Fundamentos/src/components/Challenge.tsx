export const Challenge=()=>{
    let number1 = 5;
    let number2 = 4;
    const handleSum =()=>{
        console.log(number1 + number2);
        
    }
    return(
        <div>
            <h1>Números</h1>
            <p>O valor do número 1 e: {number1} e o valor do número 2 é: {number2}</p>
            <p>Clique no botão abaixo e veja no console a soma dos números</p>

            <div>
                <button onClick={handleSum}>Somar</button>
            </div>
        </div>
    )
}