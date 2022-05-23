document.addEventListener('DOMContentLoaded', () => {
    const imagesUrl = [
        'https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/programming-or-googling.jpg',
        'https://i.pinimg.com/originals/0e/d6/23/0ed623806cf3b9d805a8cb1e4c822daf.png',
        'https://memes.id/wp-content/uploads/2021/04/mbgbtzaxq6s61.jpg',
        'https://ih1.redbubble.net/image.875111905.4798/fposter,small,wall_texture,product,750x1000.jpg',
    ];
    
    let imageIndex = 2;
    
    const img = document.querySelector('#img');
    const btnLeft = document.querySelector('#btn-left');
    const btnRight = document.querySelector('#btn-right');

    img.src = imagesUrl[imageIndex];


    btnLeft.addEventListener('click', () => changeSlider('left'));
    btnRight.addEventListener('click', () => changeSlider('right'));

    // toggleDisabledBtn();
    
    // function toggleDisabledBtn() {
    //     if (imageIndex === 0) {
    //         btnLeft.disabled = true;
    //     } else {
    //         btnLeft.disabled = false;
    //     }
    
    //     if (imageIndex === imagesUrl.length - 1) {
    //         btnRight.disabled = true;
    //     } else {
    //         btnRight.disabled = false;
    //     }
    // }


    function changeSlider(direction) {
        switch (direction) {
            case 'left': {
                if (imageIndex === 0) {
                    imageIndex = imagesUrl.length - 1;
                } else {
                    imageIndex--;
                }
                break;
            }
            case 'right': {
                if (imageIndex === imagesUrl.length - 1) {
                    imageIndex = 0;
                } else {
                    imageIndex++;
                }
                break;
            }
        }
    
        img.src = imagesUrl[imageIndex];
    }




    function sumInput() {

        let numbers = [];
        дуе ыгь
      
        while (true) {
      
          let value = prompt("Введите число", 0);
      
          // Прекращаем ввод?
          if (value === "" || value === null || !isFinite(value)) break;
      
          numbers.push(+value);
        }
      
        // let sum = 0;
        // for (let number of numbers) {
        //   sum += number;
        // }
        return sum;
      }
      
      alert( sumInput() );
})