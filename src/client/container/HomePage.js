import React, {Component} from 'react'
import style from '../css/homepage.less'
import TodyHot from '../component/TodyHot'
import TopNav from '../component/TopNav'

var data = [
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
    {
        title: "玛格丽特的春天",
        image: "/4_04291GG4P33.jpg",
        update: "2017-04-29"
    },
]

class HomePage extends Component{
    render (){
        return (
            <div className="homepage">
                <TopNav/>
                <div className="todymovie">
                    <TodyHot title="今日热门电影推荐" data={data} />
                </div>
                <div className="todytb">
                    <TodyHot title="今日热门电视剧推荐" data={data} />
                </div>
                <div className="friendlink">
                    <p>友情链接</p>
                    <div className="link">
                        <a href="http://www.piaohua.com">飘花电影网</a>
                        <a href="http://www.dy2018.com" target="_blank">电影天堂</a>
                        <a href="http://www.20yy.com/" target="_blank">最新电影</a>
                        <a href="http://xs.piaohua.com" target="_blank">宝鉴</a>
                        <a href="http://www.265tv.com" target="_blank"> 百度影音电影</a>
                        <a href="http://www.66ys.cc/" target="_blank">电影下载</a>
                        <a href="http://www.juqingba.cn" target="_blank">剧情介绍</a>
                        <a href="http://www.piaohua.com" target="_blank">快播电影</a>
                        <a href="http://www.piaohua.com" target="_blank">2013最新电影</a>
                        <a href="http://www.guipian.cc/" target="_blank">鬼片电影网</a>
                        <a href="http://www.66721.com/" target="_blank">TXT小说</a>
                        <a href="http://www.hunanzhibo.com/" target="_blank">湖南卫视在线直播</a>
                        <a href="http://www.jide123.com" target="_blank">偷星九月天</a>
                        <a href="http://www.dagougou.cc" target="_blank">百度影音</a>
                    </div>
                </div>
                <footer>
                    <div id="bot">2006-2010 飘花免费
                        <a href="http://www.piaohua.com">电影下载</a>
                        站  www.piaohua.com. All Rights Reserved
                        <a href="http://www.piaohua.com">电影下载网站 免费</a>
                        就在飘花网<br/><a href="http://www.piaohua.com">下载电影</a>
                        就来飘花电影网，本站资源均为网络免费资源搜索机器人自动搜索的结果，本站只提供
                        <a href="http://www.piaohua.com">最新电影下载</a>
                        ，并不存放任何资源。<br/>所有视频版权归原权利人，将于24小时内删除！我们强烈建议所有影视爱好者购买正版音像制品！
                        <br/>本站拒绝一切非法，淫秽电影，欢迎大家监督 有问题可联系管理员
                    </div>
                </footer>
            </div>
        );
    }
}
export default HomePage