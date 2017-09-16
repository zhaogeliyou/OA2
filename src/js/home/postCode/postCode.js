define(['text!template/home/postCode/postCodeTpl.html'], function(postCodeTpl) {
    return function() {
        $('#postCode').remove();
        var $postCodeTpl = $(postCodeTpl);
        $('.main-content').append($postCodeTpl)

        $(function() {
            // 页面开始动画
            $postCodeTpl.stop().animate({ 'left': 0 }, 200)

            // 注册页面关闭按钮事件
            .on('tap', '.close', function() {
                $postCodeTpl.stop().animate({ 'left': '100%' }, 200)
            })
        })
    }
})