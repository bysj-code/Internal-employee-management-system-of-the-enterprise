import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import yuangong from '@/views/modules/yuangong/list'
    import aboutus from '@/views/modules/aboutus/list'
    import yuangonggongzi from '@/views/modules/yuangonggongzi/list'
    import wenjianxinxi from '@/views/modules/wenjianxinxi/list'
    import yuangongkaoqin from '@/views/modules/yuangongkaoqin/list'
    import forum from '@/views/modules/forum/list'
    import systemintro from '@/views/modules/systemintro/list'
    import bumen from '@/views/modules/bumen/list'
    import messages from '@/views/modules/messages/list'
    import zhiwei from '@/views/modules/zhiwei/list'
    import config from '@/views/modules/config/list'
    import yuangongshiwu from '@/views/modules/yuangongshiwu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/yuangonggongzi',
        name: '员工工资',
        component: yuangonggongzi
      }
      ,{
	path: '/wenjianxinxi',
        name: '文件信息',
        component: wenjianxinxi
      }
      ,{
	path: '/yuangongkaoqin',
        name: '员工考勤',
        component: yuangongkaoqin
      }
      ,{
	path: '/forum',
        name: '员工论坛',
        component: forum
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/bumen',
        name: '部门',
        component: bumen
      }
      ,{
	path: '/messages',
        name: '意见反馈',
        component: messages
      }
      ,{
	path: '/zhiwei',
        name: '职位',
        component: zhiwei
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yuangongshiwu',
        name: '员工事务',
        component: yuangongshiwu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
