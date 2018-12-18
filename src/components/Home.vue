<template>
    <div id ="menu">
      <canvas id ="canvas" class="canvas"></canvas>
    <h1 class="vue-title" align="center">Manage express</h1>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Enjoy convenient management of express</i></b>
          <p></p>
          <p class ="smallTittle">Just click <a href ="/addGood">here</a> to go to</p>
          <p class ="smallTittle">the page to search for your express</p>
        </td>
      </tr>
    </table>
    <br><br><br><br>
    <p class="lead">Assignment finished by <b>Yan Liu 20082245</b></p>
      <div class="city"></div>
      <div class="moon"></div>
    </div>
</template>
<script>
import Stars from '../../static/js/Star'
import Moon from '../../static/js/Moon'
import Meteor   from '../../static/js/Meteor'
export default {
  mounted() {
    let canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      width = window.innerWidth,
      height = window.innerHeight,
      //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
      moon = new Moon(ctx, width, height),
      stars = new Stars(ctx, width, height, 200),
      meteors = [],
      count = 0

    canvas.width = width;
    canvas.height = height;

    const meteorGenerator = ()=> {
      //x位置偏移，以免经过月亮
      let x = Math.random() * width + 800
      meteors.push(new Meteor(ctx, x, height))

      //每隔随机时间，生成新流星
      setTimeout(()=> {
        meteorGenerator()

      }, Math.random() * 2000)
    }

    const frame = ()=>{
      count++
      count % 10 == 0 && stars.blink()
      moon.draw()
      stars.draw()

      meteors.forEach((meteor, index, arr)=> {
        //如果流星离开视野之内，销毁流星实例，回收内存
        if (meteor.flow()) {
          meteor.draw()
        } else {
          arr.splice(index, 1)
        }
      })
      requestAnimationFrame(frame)
    }
    meteorGenerator()
    frame()
  }
}
</script>
<style>
  .lead {
    color: whitesmoke;
    font-weight: 200;
    font-size: 2.5rem;
    text-align: center;
  }
  .smallTittle {
    color: whitesmoke;
    font-size: 1.5rem;
    text-align: center;
  }
  .vue-title {
    font-size: 70pt;
    color: #fbfbff;
    margin-bottom: 10px;
  }
  #menu {
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .canvas {
    position:fixed;
    z-index: -1;
  }

  .city {
    width: 100%;
    height: 170px;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    background: url('../assets/images/city.png') no-repeat;
    background-size: cover;
  }
  .moon {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 100px;
    top: 100px;
    background: url('../assets/images/moon.png') no-repeat;
    background-size: cover;
  }
</style>
