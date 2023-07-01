
    const frm=document.getElementById('frm');
    frm.addEventListener('submit',(event)=>{
        event.preventDefault();

        let name=document.getElementById('name');
        let email=document.getElementById('email');
        let department=document.getElementById('department');


        const formdata=new FormData(frm);
        const employee=Object.fromEntries(formdata.entries());



        fetch('http://localhost:8081/employee/save',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(employee)
        }).then(response=>response.json())
        .then(data =>{
            console.log('created',data);
            alert('saved succefully');
            window.location.href='list-employees.html';
        })
        .catch(error=>{
            console.error('error',error)
        }) ;
    });
