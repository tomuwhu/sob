<?php
$a = $_GET['a'] or 0;
$b = $_GET['b'] or 0;
?>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
    <style>
        body { text-align: center; }
        form { width: 500px; margin: auto; padding: 10px; }
    </style>
</head>
<h1>Összeadó</h1>
<form action="/dev" class="border">
    <input type="number" name="a" value="<?= $_SESSION['a'] ?>"><br><hr>
    <input type="number" name="b" value="<?= $_SESSION['b'] ?>"><br><hr>
    <button type="submit" class="btn btn-outline-info btn-sm">Cica</button>
</form>
<br><h2><?= $a + $b ?></h2>