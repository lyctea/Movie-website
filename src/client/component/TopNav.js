import React, {Component} from 'react'
import '../css/topnav.less'

class TopNav extends Component{
    render() {
        return (
            <div id="topnav">
                <div className="top">
                    <div className="tl">
                        <a href="#" ><img src={require("../images/logo.gif")} alt=""/></a>
                    </div>
                    <div className="tr">
                        <div className="trtop">
                            <a href="#" style={{color:"#FF0000"}}>今日最新电影</a>
                            <a href="#" style={{color:"#FF0000"}}>今日最新电视剧</a>
                            <a href="#" >加入收藏</a>
                        </div>
                        <div className="search">
                            <input type="text"/>
                            <button className="searcha">影视搜索</button>
                            <a href="#" style={{display: "block"}}>最新电影下载就在www.piaohua.com</a>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li className="nobg"><a href="/">飘花首页</a></li>
                        <li><a href="/html/dongzuo/index.html">动作片</a></li>
                        <li><a href="/html/xiju/index.html">喜剧片</a></li>
                        <li><a href="/html/aiqing/index.html">爱情片</a></li>
                        <li><a href="/html/kehuan/index.html">科幻片</a></li>
                        <li><a href="/html/juqing/index.html">剧情片</a></li>
                        <li><a href="/html/xuannian/index.html">悬疑片</a></li>
                        <li><a href="/html/zhanzheng/index.html">战争片</a></li>
                        <li><a href="/html/kongbu/index.html">恐怖片</a></li>
                        <li><a href="/html/zainan/index.html">灾难片</a></li>
                        <li><a href="/html/lianxuju/index.html">连续剧</a></li>
                        <li><a href="/html/dongman/index.html">动漫</a></li>
                        <li><a href="/html/zongyijiemu/index.html">综艺片</a></li>
                        <li><a href="http://www.xiacai.com/" target="_blank">彩票购买</a></li>
                        <li><a href="/html/zuixindianying.html">今日更新电影</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopNav


