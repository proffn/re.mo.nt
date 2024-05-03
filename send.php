<?php
    $name = $_POST ['calc__name'];
    $tel = $_POST ['calc__tel'];
    $text = $_POST ['calc__text'];

    $to = "nkenkv@mail.ru";
    $date = date ("d.m.Y");
    $time = date ("h:i");
    $subject = "Заявка с сайта";

    $msg="
    Имя: $name /n
    Телефон: $phone /n
    Текст: $text";
    mail($to, $subject, $msg, "From: $to");
?> 