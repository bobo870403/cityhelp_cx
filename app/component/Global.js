let Global = {
	baseColor: '#5172bc',
	userid: '',
	hostip: 'http://121.41.117.138:8080/cloudidea.portal/',
	// hostip: 'http://127.0.0.1:8080/cloudidea.portal/',
	/**文件服务器ip**/
	imgHostIp: 'http://60.30.52.91/',
	site: 'website',
	font: 'FZXiYuan-M01S',
	regPassWord: /^[a-zA-Z0-9]{6,10}$/, //密码正则
	regPhone: /^1[34578][0-9]\d{8}$/, //手机号码正则
	defaultImg: 'http://bpic.588ku.com/element_origin_min_pic/01/47/29/645743e3d4812eb.jpg',
	storage: '',
	/**接口api**/
	login: 'login', //用户登录接口
	getList: 'content/getList',
	detailUri: 'content/findContent',
	getListUri: 'content/getList',
	govListUri: 'cids/govservice/getList',
	govFindService: 'cids/govservice/findService',
	govGetListService: 'cids/govservice/getList',
	findActivity: 'activity/findActivity', //根据活动别名查询活动详情接口
	addActivityBook: 'activity/addActivityBook', // 预约活动接口
	getVoteList: 'vote/getList', //获取评选列表
	findVote: 'vote/findVote', //获取评选详情（以及投票结果）接口
	getSurveyList: 'survey/getList', //获取调查列表
	doVote: 'vote/vote', //评选投票接口

	//内嵌html (获取数据后需要自行拼接上</body></html>)
	HTML: `
	<!DOCTYPE html>\n
	<html>
	  <head>
	    <title>内容页面</title>
	    <meta http-equiv="content-type" content="text/html; charset=utf-8">
	    <meta name="viewport" content="width=device-width, user-scalable=no">
	    <style type="text/css">
	      body {
	        margin: 0;
	        padding: 0;
	        font: arial, sans-serif;
	        background: #fff;
	      }
	      img {
	        width:250px；
	        height:200px;
	      }
	      h1 {
	        padding: 45px;
	        margin: 0;
	        text-align: center;
	        color: #33f;
	      }
	    </style>
	  </head>
	  <body>`
}
module.exports = Global;