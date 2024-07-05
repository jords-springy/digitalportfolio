<template>
    <footer class="footer bg-light py-3 mt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center">
            <p>&copy; Jordan Springveldt {{ currentYear }}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  <style lang="css">
  /* Your existing styles can go here */
  .footer {
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: #F8F9FA; /* Light gray background */
    text-align: center;
    padding: 10px 0;
  }
  </style>