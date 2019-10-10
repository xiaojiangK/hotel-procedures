<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: .28rem;
  max-width: 750px;
  margin: 0 auto;
  height: 100%;
}
ul,li{
  list-style: none;
}
ul,li,ol,li,p,a{
  margin: 0;
}
body,html{
  width: 100%;
  height: 100%;
  color: #333;
  overflow-x: hidden;
  background: #fff;
}
.wrap{
  position: relative;
  box-sizing: border-box;
  padding: 1rem 0 0;
  .login-form{
    padding: 0 .6rem;
    li{
      min-height: .6rem;
      position: relative;
      margin: 0 0 .55rem;
      padding: 0 0 .2rem;
      border-bottom: .01rem solid #fff;
      &:last-child{
        border: none;
      }
      img{
        left: 0;
        top: 50%;
        width: .38rem;
        position: absolute;
        transform: translateY(-75%)
      }
      .phone{
        width: .34rem;
      }
      input{
        width: 100%;
        outline: none;
        border: none;
        height: .6rem;
        color: #fff;
        background: none;
        padding: 0 0 0 .6rem;
        box-sizing: border-box;
      }
      input::-webkit-input-placeholder{ 
        color:#fff;
      }
      input:-o-placeholder{ 
        color:#fff;
      }
      input::-moz-placeholder{ 
        color:#fff;
      }
      input:-ms-input-placeholder{ 
        color:#fff;
      }
      input:input-placeholder{ 
        color:#fff;
      }
      .other{
        color: #fff;
        text-align: center;
        span{
          margin: 0 .2rem
        }
        a{
          color: #fff
        }
      }
    }
  }
  .formBtn{
    width: 100%;
    outline: none;
    border: none;
    color: #fff;
    height: .98rem;
    cursor: pointer;
    font-size: .36rem;
    margin: 0 0 .3rem;
    text-align: center;
    line-height: .98rem;
    border-radius: .1rem;
    background: #EE6E35;
  }
}
</style>
