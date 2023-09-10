<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $picked = $_POST['picked'];
    $doctor = $_POST['doctor'];

    
    // Здесь указываете адрес, на который нужно отправить почту
    $to = 'stomaland@inbox.ru, erlan_akimov_dev@mail.ru';
    $subject = 'Новое сообщение с сайта';
    
    $headers = "From: $phone\r\n";
    $headers .= "Reply-To: $phone\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $message_body = "Имя: $name<br>";
    $message_body .= "Номер телефона: $phone<br>";
    if ($message) {
        $message_body .= "Сообщение: $message<br>";
    }
    if ($picked) {
        $message_body .= "Выбранная услуга: $picked<br>";
    }
    if ($doctor) {
        $message_body .= "Запись к доктору: $doctor<br>";
    }
    
    if (mail($to, $subject, $message_body, $headers)) {
        echo 'Сообщение доставлено';
    } else {
        echo 'Ошибка';
    }
}
?>