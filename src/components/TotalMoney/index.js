import './index.css'

const TotalMoney = ({precoTotal}) => {


    return (
        <div className='totalMoney'>
            <span>Valor Total:</span>
            <span>{precoTotal}</span>
        </div>
    )
}

export default TotalMoney