alert("fuck you")
    // $(document).ready(function() {
   

       fetch('http://localhost:8081/employee/list')
       .then((data)=>{
        return data.json();
       })
       .then((Data)=>{
        let tbldata="";
        Data.forEach(person => {
            tbldata+=`
            <tr>
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.department}</td>
                <td>
                   <a href="update-employees.html?id=${person.id}" class="btn btn-primary">Update</a>
                   <a href="list-employees.html?id=${person.id} " class="btn btn-danger">Delete</a> 
                    
                    </td>
                </tr>
            
            `;
        });
        document.getElementById('tbl').innerHTML=tbldata;
       });

      const url=new URLSearchParams(window.location.search);
      const employee=url.get('id');

      fetch(`http://localhost:8081/employee/delete/${employee}`,{
        method:'DELETE',
        headers:{
                'Content-Type':'application/json'
            }

      }).then(res=>{
        if (res.ok){console.log("employee deleted successifully")
        alert("employee deleted successifully")
        window.location.reload();
    
    }else{console.log("delete failed!")


}

    return res
      }).then(res=>console.log(res))



