'use strict';

window.addEventListener(
  'DOMContentLoaded',
  () => {
    // ---------------------------------------------------hide----------------------------------------------------//
    const arrow_missing = document.querySelector('.arrow__missing');
    const missing_goods_list = document.querySelector('.missing__goods_list');

    const arrow_cart = document.querySelector('.arrow__cart');
    const cart_list = document.querySelector('.cart__list');

    arrow_missing.addEventListener('click', (event) => {
      arrow_missing.classList.toggle('rotate');
      missing_goods_list.classList.toggle('hide');
    });

    arrow_cart.addEventListener('click', (event) => {
      arrow_cart.classList.toggle('rotate');
      cart_list.classList.toggle('hide');
    });
    //-----------------------------------------------------likes------------------------------------------------------//

    const likes = document.querySelectorAll('#object');

    likes.forEach((like) => {
      like.addEventListener('load', () => {
        like.contentDocument.addEventListener('click', () => {
          if (like.contentDocument.getElementById('like').getAttribute('fill') === 'black') {
            like.contentDocument.getElementById('like').setAttribute('fill', '#d548be');
          } else {
            like.contentDocument.getElementById('like').setAttribute('fill', 'black');
          }
        });
      });
    });
    //-----------------------------------------------------delete-----------------------------------------------------//

    const deletes = document.querySelectorAll('#delete');

    deletes.forEach((del) => {
      del.addEventListener('load', () => {
        del.contentDocument.addEventListener('click', () => {
          const parts = del.contentDocument.getElementById('del').querySelectorAll('path');

          parts.forEach((part) => {
            if (part.getAttribute('fill') === 'black') {
              part.setAttribute('fill', '#f55123');
            } else {
              part.setAttribute('fill', 'black');
            }
          });

          const parent_item = del.parentNode.parentNode.parentNode.parentNode;
          parent_item.remove();
        });
      });
    });
    //-----------------------------------------------------popups-----------------------------------------------------//

    //info

    const info_labels = document.querySelectorAll('.info');

    info_labels.forEach((label) => {
      label.addEventListener('click', () => {
        const parent = label.parentNode;
        const company_name = parent.querySelector('.item__fabricator').textContent;
        const info_popup = parent.querySelector('.info__popup');

        info_popup.querySelector('.info__popup_place').textContent = company_name;

        info_popup.classList.toggle('show__flex');
      });
    });
    //---------------------------------------------------checkboxes---------------------------------------------------//

    const checkbox_items = document.querySelectorAll('.cart__item_checkbox');

    checkbox_items.forEach((checkbox) => {
      checkbox.addEventListener('click', () => {
        const white_mark = checkbox.querySelector('.white__mark');

        if (checkbox.matches('.checkbox__checked')) {
          checkbox.classList.remove('checkbox__checked');
          white_mark.classList.remove('show');
        } else {
          checkbox.classList.add('checkbox__checked');
          white_mark.classList.add('show');
        }
      });
    });

    const checkbox_list = document.querySelector('.cart__list_checkbox');

    checkbox_list.addEventListener('click', () => {
      const white_mark = checkbox_list.querySelector('.white__mark');

      if (checkbox_list.matches('.checkbox__checked')) {
        checkbox_list.classList.remove('checkbox__checked');
        white_mark.classList.remove('show');

        checkbox_items.forEach((checkbox) => {
          const white_mark = checkbox.querySelector('.white__mark');

          checkbox.classList.remove('checkbox__checked');
          white_mark.classList.remove('show');
        });
      } else {
        checkbox_list.classList.add('checkbox__checked');
        white_mark.classList.add('show');

        checkbox_items.forEach((checkbox) => {
          const white_mark = checkbox.querySelector('.white__mark');

          checkbox.classList.add('checkbox__checked');
          white_mark.classList.add('show');
        });
      }
    });

    //------------------------------------------------------mixers------------------------------------------------//
    const mixers = document.querySelectorAll('.item__mixer');

    mixers.forEach((mixer) => {
      let current_amount = mixer.querySelector('.item__current_amount').textContent;
      const minus = mixer.querySelector('.item__minus');
      const plus = mixer.querySelector('.item__plus');

      plus.addEventListener('click', () => {
        current_amount = parseInt(current_amount) + 1;
        mixer.querySelector('.item__current_amount').textContent = current_amount;
      });

      minus.addEventListener('click', () => {
        if (parseInt(current_amount) > 0) {
          current_amount = parseInt(current_amount) - 1;
        } else {
          current_amount = 0;
        }
        mixer.querySelector('.item__current_amount').textContent = current_amount;
      });
    });

    //--------------------------------------------------total-price-checkbox----------------------------------------//

    const total_price_checkbox = document.querySelector('.checkbox__payment');
    const order_button = document.querySelector('.order__button');
    const total_price = document.querySelector('.total__cost');

    total_price_checkbox.addEventListener('click', () => {
      const white_mark = total_price_checkbox.querySelector('.white__mark');

      total_price_checkbox.classList.toggle('checkbox__checked');
      white_mark.classList.toggle('show');

      if (total_price_checkbox.matches('.checkbox__checked')) {
        order_button.textContent = `Оплатить ${total_price.textContent}`;
      } else {
        order_button.textContent = `Заказать`;
      }
    });
    // --------------------------------------------popup---------------------------------------------//

    const popap_bg = document.querySelector('.popup__bg');
    const popap_pay = document.querySelector('#popup__pay');
    const popap_delivery = document.querySelector('#popup__delivery');
    const change_card = document.querySelectorAll('#change__card');
    const change_delivery = document.querySelectorAll('#change__delivery');

    change_card.forEach((item) => {
      item.addEventListener('click', () => {
        popap_bg.classList.add('active');
        popap_pay.classList.add('active');

        popap_pay.querySelector('.close-popup').addEventListener('click', () => {
          popap_bg.classList.remove('active');
          popap_pay.classList.remove('active');
        });
      });
    });

    change_delivery.forEach((item) => {
      item.addEventListener('click', () => {
        popap_bg.classList.add('active');
        popap_delivery.classList.add('active');

        popap_delivery.querySelector('.close-popup').addEventListener('click', () => {
          popap_bg.classList.remove('active');
          popap_delivery.classList.remove('active');
        });
      });
    });

    //radio_pay_popup
    const pay_radio = document.querySelectorAll('.popup__pay_radio');

    pay_radio.forEach((item) =>
      item.addEventListener('click', () => {
        pay_radio.forEach((radio) => {
          radio.classList.remove('active');
        });
        item.classList.add('active');
      }),
    );

    const popup_pay_btn = document.querySelector('.popup__pay_button');
    const payment_blocks = document.querySelectorAll('.payment__block_card');

    popup_pay_btn.addEventListener('click', () => {
      for (let index = 0; index < pay_radio.length; index++) {
        const element = pay_radio[index];
        if (element.matches('.active')) {
          payment_blocks.forEach((payment__block) => {
            const card = element.parentNode.querySelector('.card__block').outerHTML;

            payment__block.innerHTML = `${card}`;
            popap_bg.classList.remove('active');
            popap_pay.classList.remove('active');
          });
          break;
        }
      }
    });

    //-------------------------------//
  },
  false,
);
