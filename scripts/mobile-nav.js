<script>
    fetch('./nav.html')
  .then(response => {
    if (!response.ok) {
      throw new Error("nav.html not found");
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
  })
  .catch(err => {
    console.error(err);
  });
</script>