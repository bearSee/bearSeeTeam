<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-01 18:31:16
 * @LastEditTime: 2022-08-18 18:25:52
 * @LastEditors: 熊望
 -->
<template>
  <div class="index">
    <div id="index">
      <el-carousel
        trigger="click">
        <el-carousel-item
          v-for="(banner, i) in (homeData.bannerList || [])"
          :key="i">
          <a
            v-if="banner.href"
            :href="banner.href">
            <el-image
              fit="cover"
              :src="banner.path" />
          </a>
          <el-image
            fit="cover"
            :src="banner.path" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="about-us">
      <div class="area-title">
        关于我们
      </div>
      <div class="content-text">
        {{ aboutUsData.contentText || '' }}
      </div>
      <div class="count-card">
        <div
          class="card"
          v-for="(count, i) in (aboutUsData.countData || [])"
          :key="i">
          <div class="card-t">
            {{ count.name }}
          </div>
          <div class="card-c">
            {{ count.count }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="solution"
      :style="{'backgroundImage': `url(${(aboutUsData.introductionData || {}).background})`}">
      <div class="solution_left">
        <div class="content-title">
          我们的服务 · 提供专业行业解决方案
        </div>
        <div class="content-text">
          {{ currentIntroduction.des || (((aboutUsData.introductionData || {}).data || [])[0] || {}).des || '' }}
        </div>
      </div>
      <div class="solution_right">
        <div
          class="int-box"
          v-for="(item, i) in ((aboutUsData.introductionData || {}).data || [])"
          :key="i"
          @mouseenter="handlerMouseenter(item)">
          <img
            :src="item.pic"
            alt=""
            srcset="">
          <div class="name">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div id="team-introduction">
      <div class="area-title">
        专家团队
      </div>
      <div class="content-text">
        {{ aboutUsData.teamIntroductionText || '' }}
      </div>
      <div class="team-card">
        <div
          class="card"
          v-for="(team, i) in (aboutUsData.teamIntroductionData || [])"
          :key="i">
          <el-avatar
            :size="80"
            :src="team.avatar || ''"
            :icon="team.icon || ''">
            {{ team.name }}
          </el-avatar>
          <div class="name">
            {{ team.name }}
          </div>
          <div class="job">
            {{ team.job }}
          </div>
          <div class="des">
            {{ team.des }}
          </div>
        </div>
      </div>
    </div>
    <div id="case-works">
      <div class="area-title">
        成功案例
      </div>
      <div class="case-card">
        <div
          class="card"
          v-for="(item, i) in (caseWorksData.data || [])"
          :key="i"
          :style="{'backgroundImage': `url(${item.pic})`}">
          <div class="case-introd">
            <div class="c-title">
              {{ item.title }}
            </div>
            <div class="c-des">
              {{ item.des }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="call-us">
      <div class="area-title">
        联系我们
      </div>
      <div class="tel-box">
        <img
          class="qr-image"
          :src="callUsData.qr"
          alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Index',
    data() {
        return {
            currentIntroduction: {},
        };
    },
    computed: {
        ...mapState(['config']),
        homeData() {
            return (this.config || {}).home || {};
        },
        aboutUsData() {
            return (this.config || {}).aboutUs || {};
        },
        callUsData() {
            return (this.config || {}).callUs || {};
        },
        caseWorksData() {
            return (this.config || {}).caseWorks || {};
        },
    },
    methods: {
        handlerMouseenter(item) {
            this.currentIntroduction = item;
        },
    },
    created() {
    },
    mounted() {
    },
};
</script>

<style lang="scss">
@import '@/assets/styles/scss/theme.scss';
.index {
  // font: 14px "Microsoft YaHei", 微软雅黑, Arial;
  color: #333;
  margin-bottom: 50px;
  .el-carousel {
    width: 100%;
    .el-carousel__container {
      height: calc(700 / 1900 * 100vw);
      .el-carousel__item {
        height: 100%;
        .el-image {
          height: 100%;
        }
      }
    }
  }
  .area-title {
    text-align: center;
    font-size: 36px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &::after {
      content: '';
      width: 80px;
      height: 3px;
      background: $theme;
      margin: 20px auto;
    }
  }
  #about-us, #team-introduction {
    text-align: center;
    margin-top: 80px;
    padding-top: 20px;
    .content-text {
      font-size: 15px;
      color: #808080;
      line-height: 30px;
      width: 60%;
      margin: 0 auto;
    }
    .count-card {
      width: calc(100% - 100px);
      margin: 50px;
      background-color: #fff;
      box-shadow: 0 1px 3px #c5c5c5;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card {
        width: 25%;
        padding: 50px 0;
        .card-t {
          font-size: 16px;
          color: #999;
        }
        .card-c {
          font-size: 45px;
          margin-top: 50px;
        }
      }
    }
    .team-card {
      width: calc(100% - 100px);
      margin: 50px;
      background-color: #fff;
      box-shadow: 0 1px 3px #c5c5c5;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .card {
        width: 25%;
        height: 260px;
        padding: 30px 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #999;
        .el-avatar {
          margin: 0 auto;
          margin-bottom: 20px;
          font-size: 25px;
          &.el-avatar--icon {
            font-size: 40px;
          }
        }
        .name {
          font-size: 22px;
          color: #333;
          margin: 0 auto;
          margin-bottom: 10px;
        }
        .job {
          font-size: 16px;
          color: #666;
          margin: 0 auto;
          margin-bottom: 10px;
        }
      }
    }
  }
  .solution {
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px;
    height: 560px;
    display: flex;
    color: #fff;
    margin-top: 50px;
    .solution_left {
      width: 50%;
      margin: auto;
      .content-title {
        font-size: 38px;
        line-height: 1.5;
      }
      .content-text {
        margin-top: 50px;
        font-size: 16px;
        line-height: 30px;
        height: 150px;
      }
    }
    .solution_right {
      width: 321px;
      height: 321px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      .int-box {
        width: 160px;
        height: 160px;
        border: 1px solid #fff;
        border-right: 0;
        border-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background: $theme;
        }
        img {
          margin: 0 auto;
          margin-bottom: 15px;
        }
        .name {
          font-size: 20px;
          text-align: center;
          margin: 0 auto;
        }
      }
    }
  }
  #case-works {
    margin-top: 80px;
    padding-top: 20px;
    .case-card {
      display: flex;
      flex-wrap: wrap;
      .card {
        width: 25%;
        height: calc(300 / 480 * 25vw);
        background-repeat: no-repeat;
        background-size: cover;
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        .case-introd {
          display: none;
          background: rgba(0, 0, 0, .7);
          width: 100%;
          height: 100%;
          color: #fff;
          flex-direction: column;
          justify-content: center;
          font-size: 16px;
          text-align: center;
          .c-title {
            max-width: 80%;
            line-height: 1.2;
            font-size: 22px;
            margin: 10px auto;
          }
          .c-des {
            margin: 10px auto;
          }
        }
        &:hover {
          .case-introd {
            display: flex;
          }
        }
      }
    }
  }
  #call-us {
    margin: 80px 0 250px 0;
    padding-top: 20px;
    .tel-box {
      display: flex;
      .qr-image {
        width: 100px;
        margin: auto;
      }
    }
  }
}
@media (max-width: 960px){
  #about-us,#team-introduction {
    .count-card {
      width: calc(100% - 60px)!important;
      margin: 50px 30px!important;
      .card {
        width: 50%!important;
      }
    }
    .team-card {
      width: calc(100% - 60px)!important;
      margin: 50px 30px!important;
      .card {
        width: 50%!important;
      }
    }
  }
  .solution {
    padding: 20px!important;
    height: auto!important;
    flex-direction: column;
    .solution_left {
      width: 100%!important;
      .content-title {
      }
      .content-text {
        height: auto!important;
        margin-bottom: 50px;
      }
    }
    .solution_right {
      width: 401px!important;
      height: auto!important;
      .int-box {
        width: 100px!important;
        height: 100px!important;
        img {
          width: 35px!important;
          height: 35px!important;
        }
        .name {
          font-size: 12px!important;
        }
      }
    }
  }
  #case-works {
    .case-card {
      .card {
        .case-introd {
          .c-title {
            font-size: 16px!important;
          }
          .c-des {
            font-size: 12px!important;
          }
        }
      }
    }
  }
}
@media (max-width: 460px){
  #about-us, #team-introduction {
    margin-top: 30px!important;
    .count-card {
      width: calc(100% - 30px)!important;
      margin: 50px 15px!important;
      .card {
        width: 100%!important;
        padding: 30px 0!important;
        .card-c {
          margin-top: 20px!important;
        }
      }
    }
    .team-card {
      width: calc(100% - 30px)!important;
      margin: 30px 15px!important;
      padding: 10px 0;
      .card {
        width: 100%!important;
        padding: 10px 0!important;
        height: 220px!important;
      }
    }
    .content-text {
      width: 90%!important;
    }
  }
  .solution {
    .solution_right {
      width: 321px!important;
      height: auto!important;
      .int-box {
        width: 80px!important;
        height: 80px!important;
        img {
          width: 35px!important;
          height: 35px!important;
        }
        .name {
          font-size: 12px!important;
        }
      }
    }
  }
  #case-works {
    .case-card {
      .card {
        width: 50%!important;
        height: calc(300 / 480 * 50vw)!important;
      }
    }
  }
}
</style>
