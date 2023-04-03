import React from 'react';

function Create({img_name, p_name, desc, price, onDataChange, onCreate}) {
  return (
    <>
        <div className='input_box'>
          <h2>상품 데이터 입력/출력/삭제하기</h2>
            <dl>
              <dt>File Name </dt>
              <dd><input type="text" name='img_name' placeholder='파일명' value={img_name} onChange={onDataChange} required /></dd>
              <dt>Product Name </dt>
              <dd><input type="text" name='p_name' placeholder='상품명' value={p_name} onChange={onDataChange} required /></dd>
              <dt>Description</dt>
              <dd><input type="text" name='desc' placeholder='설명' value={desc} onChange={onDataChange}  required /></dd>
              <dt>Price</dt>
              <dd><input type="text" name='price' placeholder='가격' value={price} onChange={onDataChange} required /></dd>
              <div className='btnbox'>
                <dd><button onClick={onCreate}>추가</button></dd>
              </div>
            </dl>
        </div>
    </>
  );
}

export default Create;