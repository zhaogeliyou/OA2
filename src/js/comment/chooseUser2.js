define(['text!template/comment/chooseUserTpl2.html', './getUser'], function(chooseUserTpl, getUser) {
    return function(that) {
        $('#addRecipient').remove();
        var $chooseUserTpl = $(chooseUserTpl)
            // 关闭选择用户页面
            .on('tap', '.close', function() {
                $chooseUserTpl.stop().animate({ 'top': '20%', 'opacity': 0 }, function() {
                    $chooseUserTpl.remove()
                })
            })
            // 点击确定，将值赋给收件人
            .on('tap', '.confirm', function() {
                var sure = $chooseUserTpl.find('.mui-input-row input');
                var arr = [];
                sure.each(function(i, v) {
                    if ($(v).prop('checked')) {
                        arr.push($(v).val())
                    }
                })
                if (that) {
                    that.find('input').val(arr);
                } else {
                    $('.recipient').find('input').val(arr);
                }
                $chooseUserTpl.stop().animate({ 'top': '20%', 'opacity': 0 }, function() {
                    $chooseUserTpl.remove()
                })
            })

        // 注册用户刷新按钮
        .on('tap', '.getUser', function() {
            var $this = $(this)
            getUser($this);
        })


        // 选择用户页面打开时的动画
        $(function() {
            $chooseUserTpl.stop().animate({ 'top': 0, 'opacity': 1 })
        })

        // 将选择用户页面添加到页面中
        $('.main-content').append($chooseUserTpl);
    }
})