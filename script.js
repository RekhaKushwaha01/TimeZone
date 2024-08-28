
    const updateTime = ()=>{
        let d = new Date()
        usa.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }).split(",")[1]
        india.innerHTML = d.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
  }).split(",")[1]
   china.innerHTML =d.toLocaleString('en-US', {
    timeZone: 'Asia/Shanghai',
  }).split(",")[1]
}
setInterval(updateTime,1000)
