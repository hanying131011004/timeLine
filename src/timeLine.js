import  React from 'react'
import './timeLine.css'

class TimeLine extends React.Component{
  constructor(props){
    super(props)
    this.state={
      arrList:[],
      
    }
    this.tikTime=10 // 每个刻度代表的时长 默认10s
    this.mouseClientX=20 // 鼠标移动的距离
  }
  componentDidMount(){
    let arr=[]
    for(let i=0;i<this.props.playTime/this.tikTime;i++){
      arr.push(i)
    }
    this.setState({
      arrList:arr
    })
  }
  moveDown=(e)=>{
    console.log(e)
    console.log(this.state.mouseClientX)
    document.querySelector('.start-cut')
    // document.querySelector('.end-cut')
  }
  mouseMove(e){
    this.mouseClientX=e.clientX
  }
  mouseOut(){
    
  }
  render(){
    return (
      <div className="time-line-box" onMouseMove={(e)=>this.mouseMove(e)} onMouseOut={()=>this.mouseOut()}>
        <div className="time-line">
          {
            this.state.arrList.map((item,index)=>(
              <span style={{'left':index*10+'px'}} className={['tik',index%10==0?'long-tik':''].join(' ')} key={item}></span>
            ))
          }
          {
            
            this.state.arrList.map((item,index)=>(
              index%10===0 && (
                <span style={{'left':index*10+'px'}} className="time-text" key={item}>
                  {Math.floor(index*10/60/60)}:
                  {Math.floor(index*10/60%60)}:
                  {Math.floor(index*10%60)}
                </span>
              )
            ))
          }
        </div>
        <div className="start-cut" onMouseDown={e=>this.moveDown(e)}></div>
        <div className="end-cut" onMouseDown={e=>this.moveDown(e)}></div>
      </div>
    )
  }
}

TimeLine.defaultProps = {    
  playTime: 1*60*60, // 视频播放的总时长(s) 默认 1小时
}


export default TimeLine

