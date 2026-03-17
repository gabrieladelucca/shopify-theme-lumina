// ===========================
// LUMINA THEME — JavaScript
// ===========================

// QUANTITY SELECTOR
document.addEventListener('DOMContentLoaded', function () {
  const quantityBtns = document.querySelectorAll('.quantity-btn');

  quantityBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const input = this.parentElement.querySelector('input');
      let value = parseInt(input.value);

      if (this.dataset.action === 'increase') {
        input.value = value + 1;
      } else if (this.dataset.action === 'decrease' && value > 1) {
        input.value = value - 1;
      }
    });
  });

  // PRODUCT IMAGE GALLERY
  const images = document.querySelectorAll('.product__image');

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      images.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // VARIANT SELECTOR
  const variantSelect = document.getElementById('variant-select');

  if (variantSelect) {
    variantSelect.addEventListener('change', function () {
      const selectedOption = this.options[this.selectedIndex];
      const isDisabled = selectedOption.disabled;
      const addToCartBtn = document.querySelector('.btn--full');

      if (addToCartBtn) {
        if (isDisabled) {
          addToCartBtn.disabled = true;
          addToCartBtn.textContent = 'Sold Out';
        } else {
          addToCartBtn.disabled = false;
          addToCartBtn.textContent = 'Add to Cart';
        }
      }
    });
  }

  // FOOTER NEWSLETTER FORM
  const footerForm = document.querySelector('.footer__form');

  if (footerForm) {
    footerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input');
      if (input.value) {
        input.value = '';
        input.placeholder = '✓ You\'re subscribed!';
      }
    });
  }
});