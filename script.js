const enddate = " 15 November 2024 09:20 am ";
        document.getElementById('enddate').textContent = enddate;

        let inputs = document.querySelectorAll('input');

        const myfun = () => { 
          

            let end = new Date(enddate);
            let now = new Date();
            let diff = (end-now)/1000;
            console.log(diff);

            if(diff<0){
                document.getElementById('para').innerHTML="times up";
                return myfun();
            }

            let days = diff/3600/24;
            let hours = (diff/3600)%24;
            let minutes = (diff/60)%60;
            let seconds = (diff%60);

            inputs[0].value=Math.floor(days);
            inputs[1].value=Math.floor(hours);
            inputs[2].value=Math.floor(minutes);
            inputs[3].value=Math.floor(seconds);

        }

       
        

        setInterval(myfun,1000);