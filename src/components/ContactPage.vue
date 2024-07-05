<template>
    <div>
      <div
        class="section1-mt-0"
        :style="{
          minHeight: '750px',
          backgroundImage: 'url(https://jords-springy.github.io/hostedimages/images/section1.png)',
          paddingTop: '60px',
          maxWidth: '100%',
          margin: '0 auto',
          backgroundSize: 'cover'
        }"
      >
        <div class="contact-section" data-aos="fade-right" data-aos-duration="3000">
          <div class="contact-title">Contact Me</div>
          <div class="formcarry-container">
            <form @submit.prevent="validateAndSubmit">
              <div class="formcarry-block">
                <label for="name">Full Name</label>
                <input type="text" v-model="name" id="name" placeholder="Your first and last name" class="form-input" />
              </div>
              <div class="formcarry-block">
                <label for="email">Your Email Address</label>
                <input type="email" v-model="email" id="email" placeholder="john@doe.com" class="form-input" />
              </div>
              <div class="formcarry-block">
                <label for="message">Your message</label>
                <textarea v-model="message" id="message" placeholder="Enter your message..." class="form-input"></textarea>
              </div>
              <div class="formcarry-block">
                <button :disabled="isFormInvalid()" type="submit" class="submit-button">Send</button>
              </div>
      
              <div v-if="showNotification()" class="formcarry-block">
                <div :class="`formcarry-message-block fc-${icon()}`">
                  <div class="fc-message-icon"></div>
                  <div class="fc-message-content">{{ errorMessage() }}</div>
                  <div class="fc-message-close" @click="resetStates()"></div>
                </div>
              </div>
            </form>
            <div class="profile-card">
                <h5>Find Me</h5>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> Western Cape, Cape Town</p>
        <img src="https://jords-springy.github.io/hostedimages/images/jordan_ceo.jpg" alt="Jordan Springveldt" class="profile-image" />
        <div class="profile-links">
          <a href="https://github.com/jords-springy" target="_blank">
            <img src="https://jords-springy.github.io/hostedimages/images/github.png" alt="GitHub Profile" class="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/jordan-springveldt-27b0342b0/" target="_blank">
            <img src="https://jords-springy.github.io/hostedimages/images/linkedin.png" alt="LinkedIn Profile" class="linkedin-icon" />
          </a>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
      
    
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const name = ref('');
      const email = ref('');
      const message = ref('');
      const error = ref('');
      const submitted = ref(false);
  
      const resetStates = () => {
        submitted.value = false;
        error.value = '';
      };
  
      const resetForm = () => {
        name.value = '';
        email.value = '';
        message.value = '';
      };
  
      const validateAndSubmit = async () => {
        resetStates();
  
        // Custom validation
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
          error.value = 'Please fill out all fields.';
          return;
        }
  
        try {
          const response = await fetch("https://formcarry.com/s/NQsKj4W9e2L", {
            method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name.value, email: email.value, message: message.value })
          });
  
          const data = await response.json();
  
          if (response.ok) {
            submitted.value = true;
            resetForm();
          } else {
            error.value = data.message || 'Submission failed. Please try again later.';
          }
        } catch (err) {
          error.value = err.message || 'Submission failed. Please try again later.';
        }
      };
  
      const showNotification = () => submitted.value || error.value;
      const icon = () => error.value ? 'error' : 'success';
      const errorMessage = () => error.value ? error.value : "Thanks for reaching out! We'll get back to you soon.";
  
      // Computed property to determine if the form submission should be disabled
      const isFormInvalid = () => !name.value.trim() || !email.value.trim() || !message.value.trim();
  
      return {
        name,
        email,
        message,
        validateAndSubmit,
        showNotification,
        icon,
        errorMessage,
        resetStates,
        isFormInvalid
      };
    }
  };
  </script>
  
  <style scoped>
  .section1-mt-0 {
    min-height: 750px;
    background-image: url(https://jords-springy.github.io/hostedimages/images/section1.png);
    padding-top: 60px;
    max-width: 100%;
    margin: 0 auto;
    background-size: cover;
  }
  
  .contact-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  
  .formcarry-container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .formcarry-block {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .submit-button {
    background-color: #a6a6a6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  
  .formcarry-message-block {
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .fc-error.active {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
  }
  
  .fc-success.active {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
  }
  
  .fc-message-icon {
    width: 20px;
    height: 20px;
    background-color: #721c24;
    margin-right: 10px;
  }
  
  .fc-message-content {
    flex: 1;
  }
  
  .fc-message-close {
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-color: #ccc;
  }
  
  @media (max-width: 1200px) {
    .formcarry-container {
      max-width: 400px;
    }
    .contact-title {
      font-size: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    .formcarry-container {
      max-width: 300px;
      padding: 15px;
    }
    .contact-title {
      font-size: 1.8rem;
    }
    label {
      font-size: 14px;
    }
    input, textarea {
      font-size: 14px;
    }
  }
  
  @media (max-width: 300px) {
    .formcarry-container {
      max-width: 250px;
      padding: 10px;
    }
    .contact-title {
      font-size: 1.5rem;
    }
    label {
      font-size: 12px;
    }
    input, textarea {
      font-size: 12px;
    }
    .submit-button {
      padding: 8px 15px;
      font-size: 14px;
    }
  }
  
  .profile-card {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .profile-image {
    width: 100%;
    max-width: 200px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  
  .profile-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .github-icon {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
  .linkedin-icon {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }
  </style>
  