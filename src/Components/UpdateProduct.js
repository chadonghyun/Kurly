import React from 'react';

//배열데이터를 수정하기 위한 컴포넌트
function UpdateProduct({product, onDataChange, onCompleteClick, setCnt}) {

  const onCntChange = () => { //변경 입력양식이 화면에 보이지 않게 함.
    setCnt(0); //상태값을 0으로 설정하여 화면에 숨김
  };
  const onCntCancel = () => {
    setCnt(0);
  }

  return (
    <>
      <div className='input_box'>
        <h4>상품 데이터 변경하기</h4>
          <dl>
            <dt>File Name </dt>
            <dd><input type="text" name='img_name' placeholder='파일명' onChange={onDataChange} /></dd>
            {/* 각각 입력양식에 onChange이벤트로 onDataChange함수를 호출하여 배열데이터를 수정할 수 있도록한다. */}
            <dt>Product Name </dt>
            <dd><input type="text" name='p_name' placeholder='상품명' onChange={onDataChange} /></dd>
            <dt>Description</dt>
            <dd><input type="text" name='desc' placeholder='설명' onChange={onDataChange} /></dd>
            <dt>Price</dt>
            <dd><input type="text" name='price' placeholder='가격' onChange={onDataChange} /></dd>
            <div className='btnbox'>
              <dd><button onClick={() => {
                onCompleteClick(product.id); //해당 아이디만 변경요청을 하고
                onCntChange(); //컴포넌트는 숨김
              }}>변경 완료</button>
              </dd>
              <dd><button onClick={onCntCancel}>변경 취소</button></dd>
            </div>
          </dl>
      </div>
    </>
  );
}

export default UpdateProduct;