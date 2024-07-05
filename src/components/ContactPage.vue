<template>
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
          <button type="submit" class="submit-button">Send</button>
        </div>
  
        <div v-if="showNotification()" class="formcarry-block">
          <div :class="`formcarry-message-block fc-${icon} active`">
            <div class="fc-message-icon"></div>
            <div class="fc-message-content">{{ errorMessage() }}</div>
            <div class="fc-message-close" @click="resetStates()"></div>
          </div>
        </div>
      </form>
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
      const errorMessage = () => error.value ? error.value : "Thanks for reaching out!, we'll get back to you soon.";
  
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

  button[type="submit"] {
    background-color: #a6a6a6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button[type="submit"]:disabled {
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
  /* For screens 1200px and below */
  @media (max-width: 1200px) {
    .formcarry-container {
      max-width: 400px;
    }
    .contact-title {
      font-size: 2rem;
    }
  }

  /* For screens 768px and below */
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

  /* For screens 300px and below */
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
    button[type="submit"] {
      padding: 8px 15px;
      font-size: 14px;
    }
  }
</style>