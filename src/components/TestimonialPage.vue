<!-- <template>
  <div
    id="testimonial-section"
    class="testimonial-section"
    data-aos="fade-down"
    data-aos-duration="3000"
  >
    <div class="testimonial-title">Testimonials</div>
    <div
      id="testimonialCarousel"
      class="carousel slide"
      data-ride="carousel"
      data-interval="false"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <img
            :src="testimonial.github"
            :alt="testimonial.name"
            class="img-fluid rounded-square"
          />
          <h5>{{ testimonial.name }}</h5>
          <p>{{ testimonial.details }}</p>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#testimonialCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#testimonialCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      testimonials: [],
    };
  },
  mounted() {
    fetch(
      "https://jords-springy.github.io/first_api/data/index.json?_=" +
        new Date().getTime()
    )
      .then((response) => response.json())
      .then((data) => {
        this.testimonials = data.testimonial;
      })
      .catch((error) => console.error(error));
  },
};
</script>
  <style scoped>
.testimonial-section {
  background-color: #f8f9fa;
  padding: 60px 0;
}
.testimonial-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
}
.testimonial-section img {
  height: 350px;
  width: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-left: 300px;
}
.carousel {
  width: 70%; 
  margin: 0 auto; 
}
.carousel-inner {
  width: 100%; 
}
.carousel-item {
  height: 100%; 
  width: 100%; 
  padding: 20px; 
  text-align: center; 
}
.carousel-item img {
  width: 10%; 
  height: auto; 
  margin: 0 auto; 
}
.carousel-item p {
  font-size: 1.1em;
  margin: 10px 0;
  width: 50%; 
  margin: 0 auto;
  text-align: center;
}
.carousel-item h5 {
  margin: 10px 0;
  font-weight: bold;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #333;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  top: 40%; 
}
.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: #666;
}
/* Media query for 1200px */
@media (max-width: 1200px) {
  .testimonial-section img {
    height: 250px;
    width: 250px;
    margin-left: 200px;
  }
  .carousel {
    width: 80%; 
  }
  .carousel-item p {
    font-size: 1em;
    width: 60%; 
  }
}

/* Media query for 300px */
@media (max-width: 300px) {
  .testimonial-section img {
    height: 150px;
    width: 150px;
    margin-left: 100px;
  }
  .carousel {
    width: 90%; 
  }
  .carousel-item p {
    font-size: 0.9em;
    width: 80%; 
  }
  .testimonial-title {
    font-size: 2rem;
  }
}
</style> -->