/* -------------------------------------------------------------------------- */
/*                               Form-Processor                               */
/* -------------------------------------------------------------------------- */

const formInit = function formInit() {
  const zforms = document.querySelectorAll('[data-form]');

  if (zforms.length) {
    zforms.forEach((form) => {

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const feedbackEl = form.querySelector('.feedback');
        const formData = new FormData(form);
        try {
          const response = await fetch(`https://formspree.io/f/${'YOUR_FORM_ID'}`, {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json'
            }
          });
          const result = await response.json();

          if (response.ok) {
            feedbackEl.innerHTML = `
            <div class="alert alert-success">
              Your message has been sent successfully.
            </div>`;
            form.reset();
          } else {
            feedbackEl.innerHTML = `
            <div class="alert alert-danger">
              ${result.error || 'Something went wrong'}
            </div>`;
          }
        } catch (err) {
          feedbackEl.innerHTML = `
          <div class="alert alert-danger">
            Network error. Please try again.
          </div>`;
        } finally {
          setTimeout(() => {
            feedbackEl.innerHTML = null;
          }, 3000);
        }
      });
    });
  }
};

export default formInit;
