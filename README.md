# Taki

[![Packagist](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/benjyair/Taki/blob/master/LICENSE)
[![](https://img.shields.io/badge/language-Python-green.svg)](https://github.com/benjyair/Taki)

**警告：随着蝉游记逐步关闭服务器，该项目爬虫部分也随之失效，已经爬取下来的数据还可以正常使用**

### 下载源码:

```shell
git clone git@github.com:benjyair/Taki.git

git clone https://github.com/benjyair/Taki.git
```


### 目录结构:

* spyder

    一个 Python 爬虫，可以爬到用户信息、用户游记数据、用户旅行地图数据。

* web

    使用 Flask 写的一个 web 服务器，使用爬下来的数据，基本还原蝉游记的原貌。


### 安装依赖:
```shell
cd Taki
pip install -r requirements.txt
```


### 使用:

* 爬虫的使用
```shell
# 启动爬虫
python spyder/main.py
# 接下来输入爬取用户的 ChanYouJi Id
```


* 服务器的使用
```shell
# 加载爬下来的数据
cp -r spyder/data/ web/static/data/
# 启动服务器
python web/application.py
# 访问http://127.0.0.1:5000/users/<替换 ChanYouJi Id> 
```


### 问题反馈
任何问题欢迎在 [Issues](https://github.com/benjyair/Taki/issues) 中反馈。


### 项目由来
银叔的蝉游记从入坑以来一直非常喜欢，画卷一样的布局、旅行中美好的回忆以及满世界打卡的功能深深吸引着我。但自从蝉游记易手之后，项目能否继续活下去一直都存在疑问。2017 年底，蝉游记服务器出现过多次 404 和 500，由此萌生了离线蝉游记数据的这个想法。项目名 Taki 取自新海诚《你的名字》中 "泷" 的名字，希望借电影的寓意来保存自己在蝉游记的一些回忆。
