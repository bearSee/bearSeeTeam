<template>
  <div class="master">
    <el-container class="master-content">
      <el-header class="master-head">
        <div class="head-left">
          <img
            :src="config.logo"
            alt=""
            srcset="">
          <div class="c-des">
            <p class="c-title">
              贝尔西团队
            </p>
            <p class="c-url">
              bearsee.com.cn
            </p>
          </div>
        </div>
        <sib-menu
          mode="horizontal"
          active-text-color="#1fdbc6"
          :router="false"
          :default-active="activeMenu"
          :menus="menus"
          @select="onselect" />
      </el-header>
      <el-main
        class="main-content vertical-scroll"
        :class="$route.name + '-container'">
        <router-view class="animated fadeIn delay-0.5s" />
      </el-main>
      <div class="beian-number">
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank">Copyright © Bearsee 粤ICP备18057546号</a>
      </div>
    </el-container>
    <el-backtop target=".main-content">
      <i class="el-icon-arrow-up go-top" />
    </el-backtop>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
    name: 'Master',
    data() {
        return {
            menus: [
                {
                    name: '首页',
                    path: 'index',
                },
                {
                    name: '关于我们',
                    path: 'about-us',
                },
                {
                    name: '专家团队',
                    path: 'team-introduction',
                },
                {
                    name: '成功案例',
                    path: 'case-works',
                },
                {
                    name: '联系我们',
                    path: 'call-us',
                },
            ],
            activeMenu: 'index',
        };
    },
    computed: {
        ...mapState(['config']),
    },
    methods: {
        handlerScrollTo(endX, endY, duration) {
            const target = this.$el.querySelector('.main-content');
            const startX = target.scrollLeft;
            const startY = target.scrollTop;
            // const startX = window.scrollX || window.pageXOffset;
            // const startY = window.scrollY || window.pageYOffset;
            const distanceX = endX - startX;
            const distanceY = endY - startY;
            const startTime = new Date().getTime();

            const easeInOutQuart = function (time, from, distance, dura) {
                // eslint-disable-next-line no-cond-assign
                if ((time /= dura / 2) < 1) return distance / 2 * time * time * time * time + from;
                // eslint-disable-next-line no-return-assign
                return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
            };

            const timer = setInterval(() => {
                const time = new Date().getTime() - startTime;
                const newX = easeInOutQuart(time, startX, distanceX, duration);
                const newY = easeInOutQuart(time, startY, distanceY, duration);
                if (time >= duration) {
                    clearInterval(timer);
                }
                target.scrollTo(newX, newY);
            }, 1000 / 60);
        },
        onselect(path) {
            const pos = (this.$el.querySelector(`#${path}`) || {}).offsetTop || 0;
            this.handlerScrollTo(0, pos, 500);
        },
    },
};
</script>

<style lang="scss">
@import '@/assets/styles/scss/theme.scss';

.master {
  height: 100%;
  width: 100%;
  background: #f8f8f8;
  overflow: hidden;
  .master-content {
    height: 100%;
    width: 100%;
    .master-head {
      justify-content: space-between;
      background: #fff;
      .head-left {
        display: flex;
        margin: auto 10px;
        margin-right: 50px;
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        .c-des {
          font-size: 12px;
          color: #999;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-top: 5px;
          .c-title {
            font-size: 16px;
            font-weight: 600;
            color: #E6A23C;
            margin-bottom: 4px;
          }
        }
      }
      .sib-menu {
        width: calc(100% - 210px);
        display: flex;
        justify-content: flex-end;
        .el-menu {
          display: flex;
          overflow-y: hidden;
          overflow-x: auto;
          border: 0;
        }
      }
    }

    .main-content {
      position: relative;
      overflow-x: hidden;
      padding: 0;
      &>div {
        width: 100%;
      }
    }

    .beian-number {
      width: 100%;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      opacity: 0.8;
      font-size: 14px;
      padding: 6px 0;
    }
  }

  .el-backtop {
    color: #fff;
    background: $theme;
    opacity: .7;
  }
}
</style>
