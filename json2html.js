// json2html.js

export default function json2html(data) {
    // Start building the table with the required attribute
    let html = `
        <table data-user="kushagrarajput987@gmail.com">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>`;

    // Loop through the data array to add rows
    data.forEach(item => {
        html += `
                <tr>
                    <td>${item.Name || ''}</td>
                    <td>${item.Age || ''}</td>
                    <td>${item.Gender || ''}</td>
                </tr>`;
    });

    // Close the table
    html += `
            </tbody>
        </table>`;
    return html;
}
