<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <style>
    .button-action {
      color: red;
      /* width: 20px; */
    }

    .input-group-text {
      background-color: transparent !important;
      width: 40px !important;
    }

    .input-group {
      margin: 10px 0;
    }

    .form {
      width: 100%;
      max-width: 500px;
    }

    #main .carousel-inner img {
      max-height: 80vh;
      object-fit: cover;
      filter: grayscale(70%);
    }

    #carousel {
      position: relative;
    }

    #carousel .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      z-index: 1;
    }

    #carousel .overlay .container,
    #carousel .overlay .row {
      height: 100%;
    }
  </style>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
  <script src="https://kit.fontawesome.com/4372725a41.js" crossorigin="anonymous"></script>

  <title>Crud Alumno</title>
</head>

<body>

  @yield('content')
  @yield('image')
  @include('footer')
  <!-- Optional JavaScript -->
  <script src="sweetalert2.all.min.js"></script>
  <!-- Optional: include a polyfill for ES6 Promises for IE11 -->
  <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>


  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>

</html>