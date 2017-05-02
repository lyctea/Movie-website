import React, {Component} from 'react'
import TopNav from '../component/TopNav'
import '../css/classify.less'
import Pagination  from 'antd/lib/pagination';
import 'antd/lib/pagination/style/index.less'

const classArr = [
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    },
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    },
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    },
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    },
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    },
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    },
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    },
    {
        index: 1,
        title: "守护者：世纪战元",
        class: "动作片"
    }
];
const listArr = [
    {
       title: "守护者：世纪战元",
       quality: "BD1280高清",
       des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
       update: "04-22",
       imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    },
    {
        title: "守护者：世纪战元",
        quality: "BD1280高清",
        des: "◎译 名 守护者：世纪战元/世纪战元/守护者联盟(台)/守护者/守卫者 ◎片 名 Защитники ◎年 代 2017 ◎国 家 俄罗...",
        update: "04-22",
        imgurl : "4_0422155440V36.jpg"
    }
];

class Classify extends Component{
    render() {
        return (
            <div className="classify">
                <TopNav/>
                <div className="im">
                    <div className="nml">
                        <strong>动作片下载排行</strong>
                        <ul>
                            {classArr.map((item,index)=>(
                                <li key={index}>
                                    <span>{item.index}</span>
                                    <a href="/html/dongzuo/2017/0422/31958.html">
                                        <font style={{color: "#0000FF"}}><font style={{color: "#FF0000"}}>{item.title}</font>BD1280高清</font>
                                    </a><br/>&nbsp;&nbsp;&nbsp;{item.class}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nmr">
                        <Pagination defaultCurrent={1} total={10*classArr.length} />
                        <div className="list">
                            {listArr.map((item,index)=>(
                                <dl key={index}>
                                    <dt>
                                        <a href="#"><img src={require("../images/"+item.imgurl)} alt={item.title}/></a>
                                    </dt>
                                    <dd>
                                        <strong>
                                            <a href="/html/dongzuo/2017/0422/31958.html">
                                                <b><font color="#FF0000">{item.title}</font></b>
                                                {item.quality}
                                            </a>
                                        </strong>
                                        <p>{item.des}</p>
                                        <span>更新时间：{item.update}&nbsp;<a href="/html/dongzuo/2017/0422/31958.html">点击下载</a></span>
                                    </dd>
                                </dl>
                            ))}
                        </div>
                        <Pagination defaultCurrent={1} total={10*classArr.length} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Classify


