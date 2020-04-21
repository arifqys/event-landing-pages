console.clear();

var Carousel = (function() {
  function Carousel(selector, imageUrls) {
    this.elGallery = document.querySelector(selector);
    if (this.elGallery) {
      this.elWrapper = this.elGallery.querySelector('.wrapper-carousel');
      this.elArrowLeft = this.elGallery.querySelector('.arrow--left');
      this.elArrowRight = this.elGallery.querySelector('.arrow--right');
      this.imageUrls = imageUrls || [];      
      this.init();
    }
  }

  Carousel.prototype.init = function() {
    this.currentItem = 0; // zero based
    this.itemCount = this.elWrapper.children.length;
    this.elArrowLeft.addEventListener('click', this.moveLeft.bind(this));
    this.elArrowRight.addEventListener('click', this.moveRight.bind(this));

    if(this.imageUrls.length >  0) {
      this.imageUrls.forEach((url) => {
        var elNew = document.createElement('div');
        elNew.classList.add('item');
        elNew.style.backgroundImage = `url(${url})`;
        this.elWrapper.appendChild(elNew);
      });
      this.itemCount = this.imageUrls.length;
    }
    
    this.render();
  }

  Carousel.prototype.moveLeft = function() {
    this.currentItem = this.currentItem > 0 ? this.currentItem - 1 : this.currentItem;
    this.render();
  }

  Carousel.prototype.moveRight = function() {
    this.currentItem = this.currentItem < (this.itemCount - 1) ? this.currentItem + 1 : this.currentItem;
    this.render();
  }

  Carousel.prototype.render = function() {
    if (this.itemCount > 0) {
      if (this.currentItem === 0) {
        this.elArrowLeft.classList.add('arrow--hidden');
      } else if (this.currentItem === this.itemCount - 1) {
        this.elArrowRight.classList.add('arrow--hidden');
      } else {
        this.elArrowLeft.classList.remove('arrow--hidden');
        this.elArrowRight.classList.remove('arrow--hidden')
      }

      var value = this.currentItem * 100;
      this.elWrapper.style.transform = `translateX(-${value}%)`;
    } else {
      this.elArrowLeft.classList.add('arrow--hidden');
      this.elArrowRight.classList.add('arrow--hidden')
    }
  }

  return Carousel;
})();

var images = new Array(5).fill(0).map((v,i) => `img/gallery/gallery${i}.JPG`);

new Carousel('.gallery', images);