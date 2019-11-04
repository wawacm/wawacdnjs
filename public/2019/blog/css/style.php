<?php  
header('Content-type: text/css');  
ob_start("compress");  
function compress($buffer) {  
  /* 删除注释 */  
  $buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);  
  /* 删除标签、空格、卡等. */  
  $buffer = str_replace(array(" 
", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);  
  return $buffer;  
}  
/* 你的CSS文件,可以多个 */  
include('https://cdnjs.yava.pw/2019/blog/css/font-awesome.min.css'); 
include('https://cdnjs.yava.pw/2019/blog/css/bootstrap.min.css'); 
include('https://cdnjs.yava.pw/2019/blog/css/swipebox.css'); 
include('https://cdnjs.yava.pw/2019/blog/css/style.css'); 
include('https://cdnjs.yava.pw/2019/blog/css/board.css');
include('https://cdnjs.yava.pw/2019/blog/css/set.css');
ob_end_flush(); 