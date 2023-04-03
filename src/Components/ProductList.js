import React,{useRef, useState} from 'react';
import Create from './Create';
import Product from './Product';
import './css/ProductList.css';
import Kurly from './Kurly.json';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function ProductList() {
  const [products, setProducts] = useState(
    Kurly
  );
  const nextId = useRef(2);

  //입력상자에서 사용할 값을 state로 관리한다.
  const [inputs1, setInputs1] = useState({
    img_name : '',
    p_name : '',
    desc : '',
    price : ''
  });

  //비구조화 할당 방식으로 state값 각각 변수에 담아주기
  const {img_name, p_name, price, desc} = inputs1;

  //onDataChange함수 작성하기
  const onDataChange1 = (e) =>{
    const {name, value} = e.target;
    //state값 변경
    setInputs1({
      ...inputs1,//변경되는 것 외에 나머지 속성값을 의미하는 나머지 패턴
      [name]:value//내부에서 밖의 변수를 속성명으로 사용시 [변수명]
    })

  }

  //추가버튼 클릭시 기존배열 뒤에 새로운 배열 데이터를 추가하는 함수
  const  onCreate = () =>{

    if(img_name === ''){
      alert('파일명을 입력해주세요');
      return;
    }else if(p_name === ''){
      alert('상품명을 입력해주세요');
      return;
    }else if(desc === ''){
      alert('설명을 입력해주세요');
      return;
    }else if(price === '' || isNaN(price)){
      alert('가격을 입력해주세요(숫자)');
      return;
    }

    const product = {
      id : 'p0' + nextId.current,
      img_name,
      p_name,
      desc,
      price
    }
    setProducts([...products, product]);
    setInputs1({
      img_name : '',
      p_name : '',
      desc : '',
      prcie : ''
    });
    nextId.current+=1;
  }

   //배열 데이터 삭제하기
  const onRemove = id =>{
    setProducts(products.filter(product=>product.id!==id))
  };

  //배열데이터 변경을 위한 state값 관리
  const [inpunts2, setInputs2] = useState({
    img_name : '',
    p_name : '',
    desc : '',
    prcie : ''
  });

  //데이터 변경을 위한 변경함수
  const ondDataChange2 = (e) =>{
    const{name, value} = e.target;

    setInputs2({
      ...inpunts2, //변경되는 것 외의 나머지 속성값을 의미하는 나머지 패턴을 의미함.
      [name]:value //내부에서 밖의 변수를 속성명으로 사용시 [변수명]
    });
  }

  //변경관리 state함수
  //updateProduct 컴포넌트에서 [변경완료]를 누르면 처리될 클릭이벤트에 줄 함수
  const onCompleteClick = (id) =>{ //함수의 매개변수로 id를 담아줌 key값을 식별하기 위함
    const product ={ //product라는 배열객체를 만들어서 폼에서 입력한 데이터를 저장
      id:id,
      img_name:inpunts2.img_name,
      p_name:inpunts2.p_name,
      desc:inpunts2.desc,
      price:inpunts2.prcie
    };

    setProducts( //위에서 입력한 배열데이터를 변경하기 위함
      products
      .filter((product) => product.id!==id) //기존 아이디와 같은 배열 데이터는 삭제
      .concat(product) //새롭게 연결하고자 하는 데이터 product에 붙여줌
      .sort((a,b)=>{ //id순서대로 들어가야하기 때문에 순서에 맞게 정렬해줌
        if(a.id>b.id) return 1;
        if(a.id<b.id) return -1;
        return 0;
      })
    );
    
  //   setProducts((prevProducts) =>
  //   prevProducts
  //     .filter((p) => p.id !== id)
  //     .concat(product)
  //     .sort((a, b) => a.id - b.id)
  // );

    setInputs2({ //위에서 배열데이터값이 입력이 끝나면 상태값은 모두 초기화한다.
      img_name:'',
      p_name:'',
      desc:'',
      price:''
    })

  }



  return (
    <>
      <Swiper 
      modules={[Pagination, Autoplay]}
        spaceBetween = {5}
        slidePerView = {3}
        // navigation
        autoplay = {{delay:3000}}
        pagination ={{clickable : true}}
        // scrollbar={{draggable : true}}
        className = 'swiperStyle'
        >
        <SwiperSlide>
          <img src="./images/banner01.jpg" alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src="./images/banner02.jpg" alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src="./images/banner03.jpg" alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src="./images/banner04.jpg" alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src="./images/banner05.jpg" alt="" />
        </SwiperSlide> 
      </Swiper>

      <Create onDataChange = {onDataChange1} onCreate = {onCreate} img_name={img_name} p_name={p_name} desc={desc} price={price}/>
      <hr />
      <ul className='prd'>
        {products.map(product => <Product product={product} key={product.id} onRemove={onRemove} onDataChange={ondDataChange2} onCompleteClick={onCompleteClick} />)}
      </ul>
    </>
  );
}

export default ProductList;