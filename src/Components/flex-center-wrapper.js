import '../Styles/flex-center-wrapper.scoped.css'

function FlexCenterWrapper({children}){
  return(
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default FlexCenterWrapper