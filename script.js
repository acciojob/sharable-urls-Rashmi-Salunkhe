// your code here
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    let url = 'https://localhost:8080/';

    // Construct query string
    const queryParams = [];
    if (name) {
        queryParams.push(`name=${encodeURIComponent(name)}`);
    }
    if (year) {
        queryParams.push(`year=${encodeURIComponent(year)}`);
    }

    if (queryParams.length > 0) {
        url += '?' + queryParams.join('&');
    }

    document.getElementById('url').textContent = url;
});
