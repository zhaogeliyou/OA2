define(['text!template/comment/getDocListTpl/getDocListTpl.html'], function(getDocListTpl) {
    return function($this) {
        $this.html(getDocListTpl)
    }
})