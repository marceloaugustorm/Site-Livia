import SP from "../assets/sao_paulo.png"

const SobreEla = () => {
    return (
        <div className="container text-center mt-5">
            <h1>São Paulo infelizmente</h1>

            
            <img src={SP} alt="" 
            height="150"
            />
            <p>Um dia vai vira palmeirense</p>
        </div>
    );
};

export default SobreEla;
