import React, {Component} from 'react'
import TodyHotCell from '../component/TodyHotCell'
import '../css/todyhot.less'

class TodyHot extends Component{
    render() {
        let {title, data} = this.props;
        console.log(data);
        return (
            <div className="todyhot">
                <h2>
                    {title}
                 <span><a href="#">更多..</a></span>
                </h2>
                {data.map((item,index)=>
                    <TodyHotCell key={index} title={item.title} showimg={item.image} update={item.update}/>
                )}
            </div>
        )
    }
}

export default TodyHot


