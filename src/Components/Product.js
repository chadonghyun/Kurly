import React,{useState} from 'react';
import UpdateProduct from './UpdateProduct';

function Product({product, onRemove, onDataChange, onCompleteClick}) {
  const [cnt, setCnt] = useState(0); //상태관리 값을 0으로 초기화 => 0일때 UpdateProduct가 안보이게 하기 위함.

  //변경버튼 누르면 state값에 1을 넣어서 UpdateProduct가 보이게 함.
  const onUpateClick = () => {
    if(cnt===0){
      setCnt(1);
    }else{

    }
  }


  return (
    <>
      <li className='prdlist'>
        <a href="./" title=''>
          <img src={`${process.env.PUBLIC_URL}/images/${product.img_name}`} alt="" />
          <div className='p_desc'>
            <h3>{product.p_name}</h3>
            <p>{product.desc}</p>
            <p>{product.price}</p>
          </div>
        </a>
        <p><button onClick={onUpateClick}>변경</button><button onClick={()=>onRemove(product.id)}>삭제</button></p>
      </li>
      {cnt === 1 && <UpdateProduct 
        product = {product}
        onDataChange = {onDataChange}
        onCompleteClick = {onCompleteClick}
        setCnt = {setCnt}
      />}
    </>
  );
}

export default Product;