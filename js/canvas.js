//绘制基础图案，圆、数字、分针和时针
function drawBasic(){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';

    //外圆
    ctx.arc(0, 0, 100, 0, 2 * Math.PI, false);

    //内圆
    ctx.moveTo(95, 0);
    ctx.arc(0, 0, 95, 0, 2 * Math.PI, false);

    //时钟数字
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('12', 0, -80);
    ctx.fillText('3', 80, 0);
    ctx.fillText('6', 0, 80);
    ctx.fillText('9', -80, 0);

    //分针
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -65);

    //时针
    ctx.moveTo(0, 0);
    ctx.lineTo(-55, 0);
    ctx.stroke();

    //秒针
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -70);
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
}

//绘制时刻标记
function drawScale(radian){
    //定位线
    ctx.beginPath();
    ctx.rotate(radian);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -87);
    ctx.stroke();

    //白线覆盖
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -73);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    //还原弧度
    ctx.rotate(0 - radian);

}

//秒针走动
function secondHandGo(radian){
    //白线覆盖上一个分针
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffffff';
    ctx.rotate(radian - 2 * Math.PI / 60);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -71);
    ctx.stroke();
    ctx.rotate(0 - (radian - 2 * Math.PI / 60));

    //此时的分针
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ff0000';
    ctx.rotate(radian);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -70);
    ctx.stroke();
    ctx.rotate(0 - radian);
}

//分针走动
function minuteHandGo(radian){
    //白线覆盖上一个分针
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffffff';
    ctx.rotate(radian - 2 * Math.PI / (60 * 60));
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -66);
    ctx.stroke();
    ctx.rotate(0 - (radian - 2 * Math.PI / (60 * 60)));

    //此时的分针
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.rotate(radian);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -65);
    ctx.stroke();
    ctx.rotate(0 - radian);
}

//时针走动
function hourHandGo(radian){
    //白线覆盖上一个时针针
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ffffff';
    ctx.rotate(radian - 2 * Math.PI / (60 * 60 * 60));
    ctx.moveTo(0, 0);
    ctx.lineTo(-56, 0);
    ctx.stroke();
    ctx.rotate(0 - (radian - 2 * Math.PI / (60 * 60 * 60)));

    //此时的时针
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.rotate(radian);
    ctx.moveTo(0, 0);
    ctx.lineTo(-55, 0);
    ctx.stroke();
    ctx.rotate(0 - radian);
}