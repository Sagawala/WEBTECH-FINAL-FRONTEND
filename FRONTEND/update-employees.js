
        const urlParams = new URLSearchParams(window.location.search);
        const employeeId = urlParams.get('id');
        const form = document.getElementById('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const departmentInput = document.getElementById('department');

        fetch(`http://localhost:8081/employee/getbyid/${employeeId}`)
            .then(response => response.json())
            .then(employeeData => {
                nameInput.value = employeeData.name;
                emailInput.value = employeeData.email;
                departmentInput.value = employeeData.department;
            })
            .catch(error => console.error('Error', error));

        form.addEventListener('submit', (event) => {
            event.preventDefault();
    
            const formData = new FormData(form);
            const employee = Object.fromEntries(formData.entries());

            fetch(`http://localhost:8081/employee/update/${employeeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employee)
            })
            .then(response => response.json())
            .then(data => {
                console.log('updated', data);
             
            })
            .catch(error => console.error('Error', error));
            alert('Updated successfully');
                window.location.href = 'list-employees.html';
        });
    
