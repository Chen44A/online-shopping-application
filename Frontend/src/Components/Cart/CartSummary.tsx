type CartSummaProps = {
  totalSumma: number;
};

const CartSummary = ({ totalSumma }: CartSummaProps) => {
  return (
    <>
      <div className='sum-container'>
        <p className='sum'>Summa</p>
        <p>{totalSumma} kr</p>
      </div>
      <button className='betalaBtn'>Till kassan</button>
    </>
  );
};

export default CartSummary;
