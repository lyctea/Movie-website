import React, {Component} from 'react'
import '../css/todyhotcell.less'

class TodyHotCell extends Component{
    render() {
        let {title, showimg, update} = this.props;
        var url = showimg.toString();
        console.log(url);
        return (
            <div className="todyhotcell">
                <a href="#" className="img"><img src={require('../images'+showimg)} alt={title}/></a>
                <a href="#">
                    <strong>{title}</strong>
                </a>
                <span>{update}</span>
            </div>
        )
    }
}

export default TodyHotCell


