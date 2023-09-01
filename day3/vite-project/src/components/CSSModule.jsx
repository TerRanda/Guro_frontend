import myStyle from './CSSModule.module.css';

function CSSModule() {
  return (
    <>
    <div>열정!레드!</div>
    <p className={myStyle.textRed}>그딴거모르겠고점심뭐먹지!</p>
    </>
  )
}

export default CSSModule