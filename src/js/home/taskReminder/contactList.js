define(['text!template/home/taskReminder/contactListTpl.html'], function(contactListTpl) {
    return function($this) {
        $this.parent().siblings().html(contactListTpl);
    }
})