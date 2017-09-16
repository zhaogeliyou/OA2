define(['text!template/comment/userTpl.html'], function(userTpl) {
    return function($this) {
        $this.siblings('.user-list').html(userTpl)
    }
})