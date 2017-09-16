define(['text!template/comment/getInfoTpl.html'], function(getInfoTpl) {
    return function($this) {
        $this.siblings('.info-list').html(getInfoTpl)
    }
})