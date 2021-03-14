const fetch = require("node-fetch")

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    var check = Client.checkForUrl(formText)
    if(check)
    {
        document.getElementById('results').innerHTML = `Analyzing... please wait <span><div></div></span>`
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8082/analysis', {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url:formText}),
        })
        .then(response => response.json())
        .then(response => {
            switch(response.status.code)
            {
                case "0":     
                    document.getElementById('results').innerHTML = `
                    <table>
                    <thead>
                    <th>Agreement</th>
                    <th>Subjectivity</th>
                    <th>Score Tag</th>
                    <th>Confidence</th>
                    <th>Irony</th>
                    </thead>
                    <tbody>
                    <tr>
                    <td>` + response.agreement    + `</td>
                    <td>` + response.subjectivity + `</td>
                    <td>` + response.score_tag    + `</td>
                    <td>` + response.confidence   + `</td>
                    <td>` + response.irony        + `</td>
                    </tr>
                    </tbody>
                    </table>`
                    break;

                default:
                    document.getElementById('results').innerHTML = response.status.msg  
                    
            }
        })
    }
    
}

export { handleSubmit }
