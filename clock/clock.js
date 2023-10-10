 setInterval(() => {
   date = new Date();
   htime = d.gethours();
   mtime = d.getminutes();
   stime = d.getseconds();
   hrotation = 30*htime + mtime/2;
   mrotation = 6*mtime;
   srotation = 6*stime;

   hour.style.tramsform =`rotate(${hrotation}deg)` ;
   min.style.tramsform = `rotate(${mrotation}deg)`
   sec.style.tramsform =`rotate(${srotation}deg)`;
 },1000);