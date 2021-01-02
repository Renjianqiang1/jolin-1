import Vue from 'vue'
import Router from 'vue-router'
import vhome from '@/components/vhome'
import land from '@/components/land'
import sky from '@/components/sky'
import mess from '@/components/mess'
import ocean from '@/components/ocean'
import ech from '@/components/ech'
import video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: vhome
                
    },{
      path:'/land',
      component: land
    },
    {
      path:'/sky',
       component:sky

    },{
      path:'/ech',
      component: ech
    },{
      path:'/mess',
      component: mess
    },{
      path:'/ocean',
      component: ocean
    },
    {
      path:'/video',
      component: video
    }

  ]
})