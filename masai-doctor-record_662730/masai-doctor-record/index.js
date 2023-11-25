document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let table = document.querySelector('tbody');
    let filterSelect = document.getElementById('filter');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let doctorID = document.getElementById('doctor_id').value;
        let specialization = document.getElementById('specialization').value;
        let experience = parseInt(document.getElementById('experience').value);
        let email = document.getElementById('email').value;
        let mobile = document.getElementById('mobile').value;

        let role = 'Trainee';
        if (experience > 5) {
            role = 'Senior';
        } else if (experience >= 2 && experience <= 5) {
            role = 'Junior';
        }

        let newRow = table.insertRow(-1);
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${doctorID}</td>
            <td>${specialization}</td>
            <td>${experience} years</td>
            <td>${email}</td>
            <td>${mobile}</td>
            <td>${role}</td>
            <td id = "dlt"><button id = "btn" onclick="deleteRow(this)">Delete</button></td>`;

        form.reset();
    });

    filterSelect.addEventListener('change', function () {
        const selectedSpecialization = filterSelect.value.toLowerCase();
    
        // Corrected: Use table instead of tableBody
        let rows = table.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            let specializationCell = rows[i].getElementsByTagName('td')[2];
            if (specializationCell) {
                let specialization = specializationCell.textContent.toLowerCase();
                rows[i].style.display = selectedSpecialization === '' || specialization === selectedSpecialization ? '' : 'none';
            }
        }
    });
});

function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}