<template>
  <div :id="name" :style="{'height':height}">

  </div>
</template>

<script>
import echartsTheme from './echartsTheme'
export default {
    name:'Echarts',
    props:{
        name:{
            type:String,
            required: true
        },
        options:{
            type:Object,
            required: true,
            default:function(){
                return {}
            }
        },
        height:{
            type:String,
            default:'400px'
        }
    },
    data(){
        return{
           
        }
    },
    mounted(){
        setTimeout(()=>{
            this.init()
        }, 20);
    },
    methods:{
        init(){
            this.$echarts.registerTheme('echartsTheme', echartsTheme)
            this['echarts'+this.name] = this.$echarts.init(document.getElementById(this.name),'echartsTheme');
            this['echarts'+this.name].setOption(this.options);
            window.addEventListener('resize',this['echarts'+this.name].resize)
        },
        resize(){
            this['echarts'+this.name].resize();
        }
    }
}
</script>

<style>

</style>
