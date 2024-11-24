import TextAnimation2 from './TextAnimation2'

function SubPagesHeader({text}:{text?:string}) {
    return (
        <div className='subPageHeader_container'>
        <div className='subPageHeader'>
          {text && <TextAnimation2 text={text} flower={false}/>}
        </div>
      </div>
    )
}

export default SubPagesHeader
