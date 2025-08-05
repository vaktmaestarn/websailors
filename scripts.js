function expandPost(button) {
  const post = button.closest('.blog-post');
  const content = post.querySelector('.full-content').innerHTML;
  const expanded = document.createElement('div');
  expanded.className = 'expanded-post';
  expanded.innerHTML = `
    <button class="close-btn" onclick="this.parentElement.remove()">&times;</button>
    ${content}
  `;
  document.body.appendChild(expanded);
}
