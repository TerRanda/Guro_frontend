import React from 'react'

function Modal(props) {
  //props로 받은 정보 변수로 설정해주고
  const setModal = props.setModal;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Modal</h2>
        <p>모달 창입니다.</p>
      </div>
      <button onClick={() => {setModal(false)}}>닫기</button>
    </div>
  )
}

export default Modal