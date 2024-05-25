const headings = document.querySelectorAll('h3');

headings.forEach(function (heading) {
  heading.addEventListener('click', function () {
    const description = this.nextElementSibling;

    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });
});
