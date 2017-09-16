define(['text!template/home/taskReminder/selectContactTpl.html', './contactList'], function(selectContactTpl, contactList) {
    return function() {
        $("#selectContact").remove();
        var $selectContactTpl = $(selectContactTpl);
        $('.main-content').append($selectContactTpl);
        $(function() {
            // 选择联系人进入动画
            $selectContactTpl.stop().animate({ 'top': 0 }, 200);

            // 注册选择联系人关闭按钮事件
            $selectContactTpl.on('tap', '.select-contact-close', function() {
                $selectContactTpl.stop().animate({ top: '100%' }, 200)
            })

            // 注册选择联系人确认按钮
            .on('tap', '.select-contact-confirm', function() {
                var inputList = $('.list-content input');
                var listArr = [];
                inputList.each(function(i, v) {
                    if ($(v).prop('checked')) {
                        listArr.push($(v).val())
                    }
                })
                $('.contactName').val(listArr)
                $selectContactTpl.stop().animate({ top: '100%' }, 200)
            })

            // 注册联系人列表刷新按钮
            .on('tap', '.getContact', function() {
                var $this = $(this)
                contactList($this);
            })
        })
    }
})