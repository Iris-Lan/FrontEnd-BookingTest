function doFirst(){
    //先跟HTML畫面產生關聯，再建事件聆聽功能;
    document.getElementById('theForm').onsubmit = calculate;
}
function calculate(){
    let start = document.getElementById('start').value;
    let end = document.getElementById('end').value;
    let feedback = '';
    let day = 24 * 60 * 60 * 1000; //一天的總毫秒數

    let startDate = new Date(start);
    let endDate = new Date(end);

    //console.log(endDate - startDate);
    //if(startDate.getTime() && endDate.getTime()){
        if(startDate <= endDate){
            let diff = endDate - startDate;

            if(diff <= day){
                interval = '1 day';
            }else{
                interval = `${Math.round(diff / day)} days`;
            }

            feedback += `The room has been scheduled starting on ${startDate.toLocaleDateString()} 
            and ending on ${endDate.toLocaleDateString()}, which is a period of ${interval}`;
        }else{
            feedback += `The start date must come before the end date.`;            
        }
    //}else{
    //    feedback += `Please enter valid dates in the format MM/DD/YYYY.`;                   
    //}

    document.getElementById('feedback').innerHTML = feedback;

    return false;
}
window.addEventListener('load',doFirst);