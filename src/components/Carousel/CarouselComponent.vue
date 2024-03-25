<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentSlide: 0,
      isAnimating: false
    };
  },
  methods: {
    goToPrevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
    },
    goToNextSlide() {
      this.currentSlide = this.currentSlide === this.images.length - 1 ? 0 : this.currentSlide + 1;
    }
  },
  mounted() {
    setInterval(() => {
      this.goToNextSlide();
    }, this.interval);

    setTimeout(() => {
      this.isAnimating = false;
    }, 3000);
  }
};
</script>

<template>
  <div class="carousel">
    <button v-if="images.length > 1" class="arrow prev" @click="goToPrevSlide">&lt;</button>

    <div v-if="images.length > 0" 
         role="image" 
         aria-label="main-carousel-image" 
         :style="{ backgroundImage: `url(${images[currentSlide]?.image})` }"
         class="image"
    >
      <div :class="{ banner: true, animation: isAnimating }">
        <a :href="images[currentSlide]?.href" class="banner__link">Zobacz</a>
      </div>
    </div>

    <button v-if="images.length > 1" class="arrow next" @click="goToNextSlide">&gt;</button>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: -10vh;
} 

.image {
    width: 100vw;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}

.animation {
    animation: slideUp 2s ease forwards;
}

.banner {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    &__link {
        background-color: var(--color-background);
        padding: 20px;
        color: var(--color-heading);
        text-decoration: none;
    }
}
   

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 40px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

</style>



