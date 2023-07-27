const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment_text').value.trim();
  
    if (comment) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/post');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  