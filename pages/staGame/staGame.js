Page({
  data: {
    one_img:'../../image/6-point.png',
    two_img: '../../image/6-point.png',
    three_img: '../../image/6-point.png',
    four_img: '../../image/6-point.png',
    five_img: '../../image/6-point.png',
    six_img: '../../image/6-point.png',
    flag:true,
    timer:null,
    msg:'给我摇',
    text:'哈哈',
    txt:'恭喜你摇到了：',
    //图片的素材和效果图会发在最下面
    arrImage:[
      '../../image/1-point.png',
      '../../image/2-point.png',
      '../../image/3-point.png',
      '../../image/4-point.png',
      '../../image/5-point.png',
      '../../image/6-point.png',
    ]
  },
  enter:function(event){
    let obj = this;
    if(obj.data.flag==true){
       obj.data.timer = setInterval(function () {
        let one = Math.floor(Math.random() * 6)+1;
        let two = Math.floor(Math.random() * 6)+1;
        let three = Math.floor(Math.random() * 6)+1;
        let four = Math.floor(Math.random() * 6)+1;
        let five = Math.floor(Math.random() * 6)+1;
        let six = Math.floor(Math.random() * 6)+1;
        var arr = [one,two,three,four,five,six];
        var text;

        // 数组排序
        console.log(arr);
        //遍历数组 统计点数个数
        var numOne=0,numTwo=0,numThree=0,numFour=0,numFive=0,numSix=0;
        for(var i = 0; i < arr.length; i++) {
          if(arr[i]==1){numOne++}
          if(arr[i]==2){numTwo++}
          if(arr[i]==3){numThree++}
          if(arr[i]==4){numFour++}
          if(arr[i]==5){numFive++}
          if(arr[i]==6){numSix++}
        }
        //判断是否中奖
        if(numFour==4 && numOne==2){
          obj.data.text='状元插金花（状元）'
        }
        if(numFour==6){
          obj.data.text='六杯红（状元）'
        }
        if(numOne==6){
          obj.data.text='遍地锦（状元）'
        }
        if(numTwo==6 || numThree==6 || numFive==6 || numSix==6){
          obj.data.text='六杯黑（状元）'
        }
        if(numFour==5){
          obj.data.text='五王（状元）'
        }
        if(numOne==5 || numTwo==5 || numThree==5 || numFive==5 || numSix==5){
          obj.data.text='五子登科（状元）'
        }
        if(numFour==4){
          obj.data.text='状元'
        }
        if(numOne==1 && numTwo==1 && numThree==1 && numFive==1 && numSix==1 && numFour==1){
          obj.data.text='对堂（榜眼）'
        }
        if(numFour==3){
          obj.data.text='三红（探花）'
        }
        if(numOne==4 || numTwo==4 || numThree==4 || numFive==4 || numSix==4){
          obj.data.text='四进（进士）'
        }
        if(numFour==2 && (numOne<4 && numTwo<4 && numThree<4 && numFive<4 && numSix<4)){
          obj.data.text='二举（举人）'
        }
        if(numFour==1 && (numOne<4 && numTwo<4 && numThree<4 && numFive<4 && numSix<4) && (numOne>1 || numTwo>1 || numThree>1 || numFive>1 || numSix>1)){
          obj.data.text='一秀（秀才）'
        }
        if(numFour==0 && (numOne<4 && numTwo<4 && numThree<4 && numFive<4 && numSix<4)){
           obj.data.text='未中奖'
        }
        obj.setData({
          one_img: obj.data.arrImage[arr[0]-1],
          two_img: obj.data.arrImage[arr[1]-1],
          three_img: obj.data.arrImage[arr[2]-1],
          four_img: obj.data.arrImage[arr[3]-1],
          five_img: obj.data.arrImage[arr[4]-1],
          six_img: obj.data.arrImage[arr[5]-1],
          flag:false,
          msg:'停止',
          text: obj.data.text,
          txt:'',
        })
      }, 50);  
    }else{
      clearInterval(obj.data.timer);
      obj.setData({
           msg:'给我摇',
           flag:true,
           txt:'恭喜你摇到了:'+obj.data.text,//输出结果
      })
    }
  },
  
})