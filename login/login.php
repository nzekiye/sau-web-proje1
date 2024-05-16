<?php
// Kullanıcı adı ve şifre formdan alınıyor
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifrenin boş olup olmadığını kontrol ediyoruz
if(empty($username) || empty($password)) {
    header("Location: login.html"); // Boşsa login sayfasına geri yönlendir
    exit();
}

// Kullanıcı adının bir e-posta adresi olup olmadığını kontrol ediyoruz
if(!filter_var($username, FILTER_VALIDATE_EMAIL)) {
    header("Location: login.html"); // Eğer kullanıcı adı bir e-posta değilse login sayfasına geri yönlendir
    exit();
}

// Kullanıcı adı ve şifre kontrolü yapılabilir, burada sadece örnek bir kontrol yapıldı
if($username === "example@example.com" && $password === "password") {
    echo "Hoşgeldiniz $username"; // Kullanıcı adı ve şifre doğru ise hoşgeldin mesajı göster
} else {
    header("Location: login.html"); // Kullanıcı adı veya şifre yanlışsa login sayfasına geri yönlendir
    exit();
}
?>
